using IronPdf.Engines.Chrome;
using IronPdf.Logging;
using IronPdf.Rendering;

var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

Logger.CustomLogger = app.Logger;
Logger.LoggingMode = Logger.LoggingModes.Custom;

Installation.ChromeGpuMode = ChromeGpuModes.Disabled;
// License.LicenseKey = "";

app.MapStaticAssets();

app.MapGet("/",async () =>
{
    var chromePdfRenderer = new ChromePdfRenderer();
    chromePdfRenderer.RenderingOptions = (ChromePdfRenderOptions)ChromePdfRenderOptions.DefaultChrome.Clone();

    chromePdfRenderer.RenderingOptions.CssMediaType = PdfCssMediaType.Print;
    chromePdfRenderer.RenderingOptions.PrintHtmlBackgrounds = true;

    chromePdfRenderer.RenderingOptions.PaperSize = PdfPaperSize.A4;

    chromePdfRenderer.RenderingOptions.MarginTop = 0;
    chromePdfRenderer.RenderingOptions.MarginBottom = 0;
    chromePdfRenderer.RenderingOptions.MarginLeft = 0;
    chromePdfRenderer.RenderingOptions.MarginRight = 0;

    chromePdfRenderer.RenderingOptions.EnableJavaScript = true;

    chromePdfRenderer.RenderingOptions.Timeout = 60;
    chromePdfRenderer.RenderingOptions.WaitFor.JavaScript();


    var pdf = await chromePdfRenderer.RenderUrlAsPdfAsync("http://localhost:5138/pdf/index.html");

    return Results.Stream(pdf.Stream, "application/pdf");
});

await app.RunAsync();
