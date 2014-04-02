using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace DropDemo
{
    /// <summary>
    /// MainWindow.xaml 的交互逻辑
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private string path = AppDomain.CurrentDomain.BaseDirectory;
        private BitmapImage bmi;

        private void lstImage_Drop(object sender, DragEventArgs e)
        {
            //仅支持文件的拖放
            if (!e.Data.GetDataPresent(DataFormats.FileDrop))
            {
                return;
            }

            //获取拖拽的文件
            string[] files = (string[])e.Data.GetData(DataFormats.FileDrop);

            //这里需要注意，由于程序既支持拖过来也支持拖过去，那么ListBox就也能接收自身拖拽过来的文件
            //为了防止鼠标点击和拖拽的冲突，需要屏蔽从程序自身拖拽过来的文件
            //这里判断文件是否从程序外部拖拽进来，也就是判断图片是否在工作目录下
            if (files.Length > 0 && !files[0].StartsWith(path) &&
                (e.AllowedEffects & DragDropEffects.Copy) == DragDropEffects.Copy)
            {
                e.Effects = DragDropEffects.Copy;
            }
            else
            {
                e.Effects = DragDropEffects.None;
            }

            foreach (string file in files)
            {
                try
                {
                    //如果是从外部拖拽进来的图像，则复制该文件到工作目录下做备份
                    string destFile = path + System.IO.Path.GetFileName(file);

                    switch (e.Effects)
                    {
                        case DragDropEffects.Copy:
                            File.Copy(file, destFile, true);
                            bmi = new BitmapImage(new Uri(destFile));
                            imgShow.Source = bmi;
                            lstImage.Items.Add(destFile);
                            break;
                        default:
                            break;
                    }
                }
                catch
                {
                    MessageBox.Show("已存在此文件或导入了非图像文件！");
                }

            }
        }


        private void lstImage_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (lstImage.SelectedIndex > -1)
            {
                //只使用了Listbox单选功能
                string[] files = new string[1];
                files[0] = lstImage.SelectedItem.ToString();

                DragDrop.DoDragDrop(lstImage, new DataObject(DataFormats.FileDrop, files), DragDropEffects.Copy | DragDropEffects.Move /* | DragDropEffects.Link */);
            }
        }

        private void lstImage_MouseDoubleClick(object sender, MouseButtonEventArgs e)
        {
            string file = lstImage.SelectedItem.ToString();
            bmi = new BitmapImage(new Uri(file));
            imgShow.Source = bmi;
        }







    }
}
