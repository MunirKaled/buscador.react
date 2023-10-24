
// OBJETO BALÃO;
var balao = {

    //ATRIBUTO PARA CONTROLE DE SOPROS DO BALÃO;
    sopro: 0,

    //CARRGEA SOURCE DE IMAGENS DO BALÃO
    urlBalaoVazio: 'assets/images/balao_vazio.jpg',
    urlBalaoCheio: 'assets/images/balao_cheio.jpg',
    urlBalaoestourado: 'assets/images/balao_estourado.jpg',
    //CARREGA OBJETO DE AUDIO COM SOURCES DO ÁUDIO
    somBalaoEncher: new Audio('assets/sounds/balao_enchendo.mp3'),
    somBalaoestouro: new Audio('assets/sounds/balao_estouro.mp3'),

    // FUNÇÃO DO ONCLICK NA IMAGEM DO BALÃO;
    encherBalao: function () {
        this.sopro++;
        let imagem = document.getElementById("balao");
        //console.log(imagem);
        if (!imagem.src.match('estourado')) {
            // SE BALÃO JÁ SOPRADO 3 VEZES ELE ESTOURA;
            if (this.sopro >= 3) {
                this.sopro = 0;
                this.estourar();
            } else {
                this.somBalaoEncher.play();
                if (imagem.src.match('vazio')) {
                    imagem.src = this.urlBalaoCheio;
                }
            }
        }

    },

    // FUNÇÃO DOUBLE CLICK PARA ESTOURAR O BALÃO
    estourar: function () {
        let imagem = document.getElementById("balao");
       // console.log(imagem);
       // VERIFICA SE O BALÃO JÁ ESTÁ ESTOURADO OU SE ESTÁ VAZIO PARA NÃO EXECUTAR A FUNÇÃO ESTOURAR;
        if (!imagem.src.match('estourado')) {
            if (imagem.src.match('cheio')) {
                this.somBalaoestouro.play();
                imagem.src = this.urlBalaoestourado;
            }
        }
    }
}