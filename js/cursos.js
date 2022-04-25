// console.log ('start');

function Curso(categ, img, nomecurso, rating, qtdaulas, profname, descrcurso) {
    this.categ = categ;
    this.img = img;
    this.nomecurso = nomecurso;
    this.rating = rating;
    this.qtdaulas = qtdaulas;
    this.profname = profname;
    this.descrcurso = descrcurso;      
}

//Criando novos cursos:
const novocurso_ajax = new Curso('tecnologia','img/tag_cursos/tag-tecnologia.jpg','ajax básico',4.3,29,'Marcelino Tameirão','Lorem avoc ipsum dolor sit amet, consec adipisicing elit. Ex illo odit officia, molestiae cum labore ducimus ab praesentium, provident reiciendis voluptas aliquid dolor fugiat? Exercitationem necessitatibus magni nemo ratione quis.');

//Criando Array de cursos:
const allCursosTecnologia = [novocurso_ajax];
console.log(allCursosTecnologia);

// Adicionando cursos ao carousel:

function addSectionCursos() {
    let section = document.getElementById('objCursos');    
    let titCategoria = document.getElementById('titCateg');
    titCategoria.innerText = `Cursos de ${novocurso_ajax.categ}`; // verificar!!        
    let z = 1;
    
    section.setAttribute('id',`categ-${novocurso_ajax.categ}`);
    section.setAttribute('class',`rowCarousel_z${z++}`);

    for (let a = 0; a < 3; a++) {
    
        //Pai BoxCurso
        let paiBoxCurso = document.getElementById('slick-slide00');                

        //BoxCurso
        let BoxCurso = document.createElement('div');
        BoxCurso.setAttribute('class','boxCurso');
        paiBoxCurso.appendChild(BoxCurso);  

        //Imagem do curso
        let divImgCurso = document.createElement('div');
        divImgCurso.setAttribute('class','margem imgcurso');
        BoxCurso.appendChild(divImgCurso);
        
        let img = document.createElement('img');
        img.setAttribute('src','img/tag_cursos/tag-tecnologia.jpg');
        img.setAttribute('width','100%');
        img.setAttribute('alt',`foto do curso de ${novocurso_ajax.nomecurso}`);
        BoxCurso.appendChild(img);        

        //Título do curso
        let divTitCurso = document.createElement('div');
        divTitCurso.setAttribute('class','margem titcurso');
        BoxCurso.appendChild(divTitCurso);
        divTitCurso.innerText = `${novocurso_ajax.nomecurso}`;

        //Rating do curso
        let divRatingCurso = document.createElement('div');
        divRatingCurso.setAttribute('class','margem');
        BoxCurso.appendChild(divRatingCurso);
        divRatingCurso.innerText = `${novocurso_ajax.rating}`;

        //Quantidade de aulas
        let divQtdAulasCurso = document.createElement('div');
        divQtdAulasCurso.setAttribute('class','margem bold');
        BoxCurso.appendChild(divQtdAulasCurso);
        divQtdAulasCurso.innerText = `${novocurso_ajax.qtdaulas} aulas`;

        //Professor
        let divNomeProfCurso = document.createElement('div');
        divNomeProfCurso.setAttribute('class','margem bold');
        BoxCurso.appendChild(divNomeProfCurso);
        divNomeProfCurso.innerText = `Professor(a): ${novocurso_ajax.profname}`;

        //Descrição do curso
        let divDescrCurso = document.createElement('div');
        divDescrCurso.setAttribute('class','margem txtdecricao');
        BoxCurso.appendChild(divDescrCurso);
        divDescrCurso.innerText = `Professor(a): ${novocurso_ajax.descrcurso}`;

        //CTA ementa
        let divCTACurso = document.createElement('div');
        divCTACurso.setAttribute('class','margem ctacurso');
        BoxCurso.appendChild(divCTACurso);
        divCTACurso.innerText = `ver ementa`;
    }
         
}

addSectionCursos();