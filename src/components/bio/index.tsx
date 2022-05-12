import StyleBio from "./Bio.module.scss";

export default function Bio() {
    return (
        <div className={StyleBio.bio}>
            <h3 className={StyleBio.bio__h3}>Sobre</h3>
            <p className={StyleBio.bio__p}>Em estudo, SCSS, TypeScript e React.</p>
            <p className={StyleBio.bio__p}>
                Em 2002 iniciei na área da tecnologia quando participei da
                criação de um portal web com o nome de Se Liga Arapiraca. Já em
                2006 entrei na Universidade Federal de Alagoas para estudar
                Ciência da Computação. Foi aí que eu desenvolvi parte das minhas
                competências. Aprendi Java, MySQL, Engenharia de Software, sobre
                Empreendedorismo entre outras.
            </p>
            <p className={StyleBio.bio__p}>
                Meu período acadêmico na UFAL foi produtivo: fui bolsista em um
                projeto de iniciação científica voltado à Biotecnologia; fui
                bolsista em um projeto de extensão para desenvolvimento de um
                software desktop; fui monitor da disciplina de Teoria da
                Computação; consegui nota máxima no meu trabalho de conclusão de
                curso que tinha como foco a Análise de Sentimento, além de
                conseguir duas publicações com o mesmo, uma nacional e outra
                internacional.
            </p>
            <p className={StyleBio.bio__p}>
                Atuei também por 3 anos no serviço público, como auxiliar
                administrativo do Departamento de Legislação e Normas do
                município de Campo Grande, em Alagoas. Na época, 2010 a 2012, eu
                conciliava a universidade e o cargo de auxiliar.
            </p>
            <p className={StyleBio.bio__p}>
                No ano de 2013 entrei para a área de Análise de Testes. Fui
                selecionado para o programa Curso Sequencial de Formação
                Complementar da Universidade Federal de Pernambuco em parceria
                com a Motorola Mobility. Aperfeiçoei as minhas habilidades como
                programador da linguagem Java, além de adquirir competências
                para atuar como Analista de Testes de Software.
            </p>
            <p className={StyleBio.bio__p}>
                Já em 2014 ingressei no mestrado em Ciência da Computação da
                Universidade Federal de Sergipe atuando nas áreas de Computação
                Afetiva e Interação Homem-Máquina, ambas inseridas na grande
                área da Inteligência Artificial.
            </p>
            <p className={StyleBio.bio__p}>
                Atualmente desenvolvo full stack, utilizando PHP com o framework
                CakePHP, além de HTML, CSS e Javascript e, tenho skills em
                ferramentas de construção e edição de imagens digitais, como
                Illustrator e Photoshop.
            </p>
        </div>
    );
}
