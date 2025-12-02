// src/pages/Piamarta.jsx

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Feather, Quote } from 'lucide-react';

  
export default function Piamarta() {
    return (
        <div className="min-h-screen flex flex-col">

            <main className="flex-grow">
                {/* Hero Section (Tema Azul Petróleo/Teal) */}
                <section className="py-20 lg:py-28 bg-teal-600 text-white relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <Feather className="h-20 w-20 mx-auto mb-6" />
                        <h1
                            className="text-6xl md:text-7xl font-bold mb-4"
                            style={{ fontFamily: 'Bubblegum Sans, cursive' }}
                        >
                            São João Piamarta
                        </h1>
                        <p
                            className="text-xl md:text-2xl max-w-3xl mx-auto"
                            style={{ fontFamily: 'Fredoka, sans-serif' }}
                        >
                            O Fundador, o Santo, o Pai da Juventude. Conheça a vida
                            e a obra deste grande homem de Deus.
                        </p>
                    </div>
                </section>

                {/* Seção 1: Biografia */}
                <section className="bg-white py-20 lg:py-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-teal-500 padyng -2 ">
                            <img src="/img/estatua.webp"     
                            />
         
                        </div >

                        <div className="md:col-start-2">
                            <h2
                                className="text-4xl md:text-5xl font-bold mb-6 text-teal-800"
                            >
                                Um Coração Dedicado aos Jovens
                            </h2>
                            <p className="text-lg text-gray-700 mb-4" >
                                São João Piamarta nasceu na cidade de Brescia, norte da Itália, no dia 26 de novembro de 1841 e batizado na igreja paroquial de sua cidade. Sua família era muito pobre, e aos nove anos ficou órfão de mãe, por isso foi amparado e educado pelo avô materno.
                                Na adolescência, São Piamarta entra no seminário, Bréscia e assim começa sua caminhada rumo ao sacerdócio. Completando os estudos no seminário, é ordenado sacerdote no dia 23 de dezembro de 1865 com 24 anos. Desenvolveu sua atividade pastoral como vigário paroquial nas cidades de Carzago Riviera, em Bedizzole, na Paróquia de Santo Alexandre, em Brescia, e, enfim, como responsável pela Paróquia de Pavone Mella.
                            </p>
                            <p className="text-lg text-gray-700 mb-4" >
                                São Piamarta gostava de explicar a bíblia para os jovens, fazia meditações, representações teatrais, ensinava música e saia à procura dos jovens e crianças para o catecismo no intuito de levá-los à palavra de Deus.
                                É o tempo em que surgem as grandes indústrias na cidade de Brescia e os jovens são arrancados do ambiente da própria terra e colocados no mundo do trabalho sem preparação profissional e assistência moral. Dessa forma, os jovens eram explorados e entravam numa gravíssima crise com as convicções religiosas. 
                                Foi no seu apostolado na Paróquia de Santo Alexandre que São Piamarta tomou consciência da situação penosa, material e espiritual em que se encontrava uma multidão de jovens arrastados pelas fábricas e oficinas na esperança de um bom lucro, nas quais nem os salários eram justos, nem a vida sadia. 
                                A sensibilidade humana e pastoral de São Piamarta o levou a elaborar um projeto social e cristão inspirado no serviço prestado por ele à juventude da Paróquia de Santo Alexandre de modo a levar a palavra de Deus a uma maior parcela de jovens. Monsenhor Pedro Capretti, grande conselheiro dos jovens sacerdotes da diocese, sentiu a validade da ideia de São Piamarta e o incentivo em realizar a obra projetada.
                            </p>
                        </div>
                    </div>
                </section>
                
                {/* Seção 2: Citações e Legado (Fundo Claro) */}
                <section className="bg-teal-50 py-20 lg:py-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-12 items-start">
                        {/* Coluna 1 */}
                        <div className=" overflow-hidden shadow-2xl border-4 border-teal-500 padyng -2 ">
           
                            <img src="/img/1.webp"     
                            />
                        </div >
                        <div className=" overflow-hidden shadow-2xl border-4 border-teal-500 padyng -2 ">
           
                            <img src="/img/2.webp"     
                            />
                        </div >
                        <div className=" overflow-hidden shadow-2xl border-4 border-teal-500 padyng -2 ">
           
                            <img src="/img/3.webp"     
                            />
                        </div >
                        <div className=" overflow-hidden shadow-2xl border-4 border-teal-500 padyng -2 ">
           
                            <img src="/img/4.webp"     
                            />
                        </div >
                    </div>
                </section>
                
                {/* Seção 2: Citações e Legado (Fundo Claro) */}
                <section className="bg-teal-50 py-20 lg:py-28">       
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                        <div className="md:col-start-1">
                            <p className="text-lg text-gray-700" >
                                Assim, sobre a colina de Santa Júlia, em Brescia, São Piamarta conserta duas pequenas casas que estavam caindo e inicia as atividades do Instituto Artigianelli. As grandes dificuldades econômicas que logo cercaram São Piamarta, levaram o Bispo a pedir que ele desistisse da obra, mas o bom homem com o coração cheio de confiança em Deus e convencido do valor da obra recém-criada, assume pessoalmente toda a responsabilidade do Instituto e com a aprovação do Bispo continua seu trabalho. Deus premiou o Padre que, arriscando uma total falência por amor de seus jovens, nele confiou. O instituto Artigianelli realizou um verdadeiro serviço aos jovens do mundo do trabalho, em Brescia.
                                Remedello, província de Bréscia, era uma região pouco fértil e despovoada. Assim, em 1895 funda a Colônia Agrícola de Remedello para revitalizar e dignificar a agricultura, ensinando aos jovens agricultores métodos de cultivos científicos e eficazes. Remedello aos poucos vai se transformando, colheitas são dobradas e os terrenos amarelados se tornam verdes e férteis.
                            </p>
                        </div>
                        <div className="md:col-start-2">
                            <p className="text-lg text-gray-700">
                                Em torno do São Piamarta cresceu uma comunidade de pessoas compartilhando dos seus ideais e do seu modo de viver. O Padre, sob o impulso do Espírito Santo, funda uma família religiosa para dar continuidade à sua obra em favor da juventude pobre. No dia 25 de maio de 1902, durante a celebração da Santa Missa, o Bispo de Brescia aprovou verbalmente a “Pia Sociedade da Sagrada Família de Nazaré”, formada por sacerdotes e leigos consagrados. </p>
                            <p className="text-lg text-gray-700">
                                Em 1911 São Piamarta continua sua missão juntamente à Madre Elisa Baldo, ao darem início à Congregação das “Irmãs Humildes Servas do Senhor”, irmãs que participando do anseio social e pastoral do Padre se dedicam ao serviço dos jovens do mundo operário e da agricultura.
                                No dia 25 de abril de 1913, às 8 horas da manhã, na Escola Agrícola de Remedello, São Piamarta encerra, depois de breve agonia, uma vida inteiramente ao serviço de Deus e dos irmãos.
                            </p>
                        </div>
                    </div>
                 </section>
                
                {/* Seção 2: Citações e Legado (Fundo Claro) */}
                <section className="bg-teal-50 py-20 lg:py-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-800">
                               Etapas da Canonização
                            </h2>
                            <p className="text-lg text-gray-700 mb-4" >
                                No dia 22 de março de 1986 o Papa João Paulo II percebeu as virtudes heroicas de São Piamarta. Ele viveu as virtudes teologais: Fé, Esperança e Caridade e as virtudes morais: Prudência, Justiça, Fortaleza e Temperança em grau heroico.
                            </p>
                            <p className="text-lg text-gray-700 mb-4" >
                                Em 12 de outubro de 1997, na Praça de São Pedro, em Roma, o Papa João Paulo II proclamou Bem-Aventurado o São Piamarta. 
                            </p>
                            <p className="text-lg text-gray-700 mb-4" >
                               Com sua beatificação o Papa João Paulo II o doa como pai aos jovens, o indica como exemplo, o apresenta como intercessor das famílias e o oferece como protetor dos trabalhadores.
                            </p>
                            <p className="text-lg text-gray-700 mb-4" >
                               No dia 21 de outubro de 2012 às 9h30min, na Praça de São Pedro, em Roma, o Papa Bento XVI canoniza São João Batista Piamarta em reconhecimento de que, após amplo estudo e pesquisa sobre toda a vida do novo santo, a Igreja confia que ele fora, de fato, agraciado por Deus com virtudes excepcionais.
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-800">
                               Sua Mensagem
                            </h2>
                            <ul className="space-y-3 font-medium text-lg list-disc list-inside">
                                <li className="text-lg text-gray-700 mb-4" >
                                    Humildade: “A nossa miséria não é um mal, mas um bem, pois ajuda a matar o nosso egoísmo”.
                                </li>
                                <li className="text-lg text-gray-700 mb-4" >
                                    Confiança: “Viver abandonado em Deus é o melhor dos apostolados”.
                                </li>
                                <li className="text-lg text-gray-700 mb-4" >
                                    Gratidão:  “A gratidão deve ser a maior virtude da nossa Instituição”.
                                </li>
                                <li className="text-lg text-gray-700 mb-4" >
                                    Pureza: “Tudo Sim, Pecado Não”.
                                </li>
                                <li className="text-lg text-gray-700 mb-4" >
                                    A cruz como fonte de vida: “As obras de Deus crescem somente à sombra da cruz e para que possam produzir muitos frutos devem ser regadas com as nossas lágrimas e até com o nosso sangue”.
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-2x2 overflow-hidden shadow-2x2 border-4 border-teal-500 padyng -2 ">
                            <img
                                src="/img/Sao_Joao.webp"     
                            />
                        </div>
                    </div>
                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 items-center">
                        <div >
                            <p className="text-lg text-gray-700" >
                                Assim, sobre a colina de Santa Júlia, em Brescia, São Piamarta conserta duas pequenas casas que estavam caindo e inicia as atividades do Instituto Artigianelli. As grandes dificuldades econômicas que logo cercaram São Piamarta, levaram o Bispo a pedir que ele desistisse da obra, mas o bom homem com o coração cheio de confiança em Deus e convencido do valor da obra recém-criada, assume pessoalmente toda a responsabilidade do Instituto e com a aprovação do Bispo continua seu trabalho. Deus premiou o Padre que, arriscando uma total falência por amor de seus jovens, nele confiou. O instituto Artigianelli realizou um verdadeiro serviço aos jovens do mundo do trabalho, em Brescia.
                                Remedello, província de Bréscia, era uma região pouco fértil e despovoada. Assim, em 1895 funda a Colônia Agrícola de Remedello para revitalizar e dignificar a agricultura, ensinando aos jovens agricultores métodos de cultivos científicos e eficazes. Remedello aos poucos vai se transformando, colheitas são dobradas e os terrenos amarelados se tornam verdes e férteis.
                            </p>
                            <p className="text-lg text-gray-700">
                                Em torno do São Piamarta cresceu uma comunidade de pessoas compartilhando dos seus ideais e do seu modo de viver. O Padre, sob o impulso do Espírito Santo, funda uma família religiosa para dar continuidade à sua obra em favor da juventude pobre. No dia 25 de maio de 1902, durante a celebração da Santa Missa, o Bispo de Brescia aprovou verbalmente a “Pia Sociedade da Sagrada Família de Nazaré”, formada por sacerdotes e leigos consagrados. </p>
                            <p className="text-lg text-gray-700">
                                Em 1911 São Piamarta continua sua missão juntamente à Madre Elisa Baldo, ao darem início à Congregação das “Irmãs Humildes Servas do Senhor”, irmãs que participando do anseio social e pastoral do Padre se dedicam ao serviço dos jovens do mundo operário e da agricultura.
                                No dia 25 de abril de 1913, às 8 horas da manhã, na Escola Agrícola de Remedello, São Piamarta encerra, depois de breve agonia, uma vida inteiramente ao serviço de Deus e dos irmãos.
                            </p>
                        </div>
                    </div>
                </section>
                
                {/* Seção 2: Citações e Legado (Fundo Claro) */}
                <section className="bg-teal-50 py-20 lg:py-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12 items-start">
                        {/* Coluna 1 */}
                        <div className="md:col-start-1">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-800">
                                Suas Características
                            </h2>
                            <ul className="space-y-3 font-medium text-lg list-disc list-inside">
                                <li>Piedade;</li>
                                <li>Humildade;</li>
                                <li>Pobreza;</li>
                                <li>Confiança na Providência;</li>
                                <li>Caridade;</li>
                                <li>Amor e dedicação aos jovens;</li>
                                <li>Espírito de luta e sacrifício;</li>
                                <li>Gratidão;</li>
                                <li>Fidelidade à sua missão e ao trabalho.</li>
                            </ul>
                        </div>

                        {/* Coluna 2 */}
                        <div className="md:col-start-2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-800">
                                Seu Carisma
                            </h2>
                            <p className="text-lg mb-3">A juventude, as crianças pobres e abandonadas presentes:</p>
                            <ul className="space-y-3 font-medium text-lg list-disc list-inside">
                                <li>nos Orfanatos;</li>
                                <li>nos Colégios profissionalizantes;</li>
                                <li>nas Escola Agrícolas;</li>
                                <li>nos Centros de Formação Profissional;</li>
                                <li>nas Paróquias.</li>
                            </ul>
                        </div>
                         {/* Coluna 3 */}
                        <div className="md:col-start-3">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-800">
                                Sua Espiritualidade
                            </h2>
                            
                            <ul className="space-y-3 font-medium text-lg list-disc list-inside">
                                <li>nos Orfanatos;</li>
                                <li>nos Colégios profissionalizantes;</li>
                                <li>nas Escola Agrícolas;</li>
                                <li>nos Centros de Formação Profissional;</li>
                                <li>nas Paróquias.</li>
                            </ul>
                        </div>
                    </div>

                    
                </section>
                
                {/* Seção 2: Citações e Legado (Fundo Claro) */}
                <section className="bg-teal-50 py-20 lg:py-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
                            {/* Coluna 1 */}
                            <div className="md:col-start-1">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-800">
                                    Oração a São João Batista Piamarta
                                </h2>
                                <p>Nós vos louvamos, ó Deus misericordioso, porque suscitastes no São João Batisti Piamarta um grande exemplo de doação para a educação da juventude à vida cristã; no trabalho, na família e na sociedade. Dai-nos por sua intercessão que possamos viver e agir no vosso amor de Pai; experimentando a força da vossa graça, para, assim, alcançarmos a felicidade eterna e concedei-nos também, por sua intercessão, a graça que confiantes vos pedimos… Pai Nosso, Ave Maria e Glória. </p>
                            </div>
                            <div className="rounded-2x2 overflow-hidden shadow-2x2 border-4 border-teal-500 padyng -2 ">
                                <img
                                    src="/img/sao_joao_2.webp"     
                                />
                            </div>
                        </div>
                    </div>    
                </section>
                
                {/* Seção 2: Citações e Legado (Fundo Claro) */}
                <section className="bg-teal-50 py-20 lg:py-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
                        {/* Coluna 1 */}
                        <div className="md:col-start-1">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-800">
                                Os 10 Mandamentos de São João Batista Piamarta
                            </h2>
                            <ul className="space-y-1 font-medium text-lg list-disc list-inside">
                                <li>Ao jovem faça encontrar o Cristo no diálogo da amizade, colocando-lhe nas mãos o Evangelho. Depois disso, tudo estará resolvido;</li>
                                <li>Uma cidade inteira vive em pecado mortal se uma só criança tiver que dormir na rua ou debaixo das pontes;</li>
                                <li>Para salvar uma alma, estejam disponíveis a tratar-se até com o demônio;</li>
                                <li>Façam o bem ao maior número possível de pessoas e encontrarão sempre mais rostos repletos de felicidade;</li>
                                <li>O educador não é um domador de um circo de feras ou um guardião de cavalos, mas um pai com o coração de mãe;</li>
                                <li>Uma pessoa até aprende a fazer milagres se receber o dom da confiança;</li>
                                <li>A loucura cristã pertence ao campo da teologia, porque é um ato de fé;</li>
                                <li>O vosso falar seja sim, sim, não, não. Tudo mais vem do demônio;</li>
                                <li>Deus é o dono do impossível;</li>
                                <li>Se duas horas de oração são demais para as pessoas repletas de trabalhos e atividades apostólicas, então há só um remédio: rezar pelo menos três horas;</li>
                            </ul>
                        </div>
                         {/* Coluna 2 */}
                        <div className="md:col-start-2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-800">
                                Frases de São João Batista Piamarta
                            </h2>
                            <ul className="space-y-2 font-medium text-lg list-disc list-inside">
                                <li>Só pode começar bem o dia colocando-o nas mãos de Deus;</li>
                                <li>Tudo Sim, Pecado Não;</li>
                                <li>Tudo para todos e nada para si;</li>
                                <li>Confiemos na Providência;</li>
                                <li>A gratidão seja a maior virtude da nossa instituição;</li>
                                <li>Senhor, fazei que eu não seja um servo inútil e fraco;</li>
                                <li>Se a obra tivesse sido alicerçada sobre meios humanos teria falido muitas vezes.</li>
                            </ul>
                        </div>
                    </div>
                        
                        
                    </div>
                </section>
                
            </main>
        </div>
    );
}