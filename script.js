function gerarPDF() {
  // Elemento que será convertido
  const element = document.getElementById("content");
  const btn = document.getElementById("gerarPdfBtn");

  // Opções de configuração
  const opt = {
    margin: 10,
    filename: "laudo-hilly-pompermayer.pdf",
    image: {
      type: "jpeg",
      quality: 0.98,
    },
    html2canvas: {
      scale: 2,
      useCORS: true,
      letterRendering: true,
      allowTaint: true,
      scrollX: 0,
      scrollY: 0,
      logging: true,
      dpi: 192,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    },
  };

  // Esconder o botão durante a geração
  btn.style.display = "none";

  // Gerar o PDF
  html2pdf()
    .set(opt)
    .from(element)
    .save()
    .then(() => {
      console.log("PDF gerado com sucesso!");
      // Mostrar o botão novamente após a geração
      btn.style.display = "inline-block";
    })
    .catch((err) => {
      console.error("Erro ao gerar PDF:", err);
      btn.style.display = "inline-block";
      alert("Ocorreu um erro ao gerar o PDF. Por favor, tente novamente.");
    });
}

// Adiciona o event listener depois que o DOM estiver completamente carregado
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("gerarPdfBtn");
  if (btn) {
    btn.addEventListener("click", gerarPDF);
  } else {
    console.error("Botão não encontrado!");
  }
});
