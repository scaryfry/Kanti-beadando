using Microsoft.Maui.Controls;

namespace MauiApp1;

public partial class MainPage : ContentPage
{
    private int[,] board = new int[3, 3];

    public MainPage()
    {
        InitializeComponent();
        UpdateUI();
    }

    // ----- COMMANDOK -----

    private void IncreaseA_Clicked(object sender, EventArgs e) => Increase(0, 0);
    private void IncreaseB_Clicked(object sender, EventArgs e) => Increase(0, 1);
    private void IncreaseC_Clicked(object sender, EventArgs e) => Increase(1, 0);
    private void IncreaseD_Clicked(object sender, EventArgs e) => Increase(1, 1);
    private void Reset_Clicked(object sender, EventArgs e) => ResetBoard();

    // ----- METÓDUSOK -----

    private void Increase(int startRow, int startCol)
    {
        for (int r = startRow; r < startRow + 2; r++)
        {
            for (int c = startCol; c < startCol + 2; c++)
            {
                board[r, c]++;
            }
        }
        UpdateUI();
    }

    private void ResetBoard()
    {
        for (int r = 0; r < 3; r++)
            for (int c = 0; c < 3; c++)
                board[r, c] = 0;

        UpdateUI();
    }

    private void UpdateUI()
    {
        lbl00.Text = board[0, 0].ToString();
        lbl01.Text = board[0, 1].ToString();
        lbl02.Text = board[0, 2].ToString();

        lbl10.Text = board[1, 0].ToString();
        lbl11.Text = board[1, 1].ToString();
        lbl12.Text = board[1, 2].ToString();

        lbl20.Text = board[2, 0].ToString();
        lbl21.Text = board[2, 1].ToString();
        lbl22.Text = board[2, 2].ToString();
    }
}
