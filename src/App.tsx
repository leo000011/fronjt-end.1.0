
import Button from "./components/button/button";
import Card from "./components/card/card";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionContent,
//   AccordionTrigger,
// } from "./components/ui/accordion";

function App() {
  return (
    <>
      <div className="">
        <div className="flex justify-center p-5 bg-blue-200">
          <h1 className="font-bold text-[25px] md:text-[45px]">Carretinha</h1>
        </div>

        <div className="p-10 ">
          <div className=" grid grid-cols-1 gap-3 md:grid-cols-2 items-center py-5 md:py-10 ">
            <div className="flex justify-center">
              <img className="h-[350px] " src="/carretinh.jpg" alt="" />
            </div>
            <div className="">
              <h1 className="text-center text-[25px] font-semibold uppercase">
                Projeto da Carretinha
              </h1>
              <p className="text-center">
                Uma carretinha, conhecida como reboque ou trailer, é um veículo
                não motorizado que é puxado por outro veículo, geralmente um
                carro ou uma caminhonete. Estas carretinhas são utilizadas para
                transportar uma variedade de cargas, desde veículos e
                maquinários até mercadorias e materiais de construção.
              </p>
              <div className="text-center p-5 ">
                {" "}
                <Button linke="#jkl" />
              </div>
            </div>
          </div>
        </div>
        <div className="   bg-[#000] px-2 py-10">
          <h1 className="text-white text-center py-10 text-[25px]  md:text-[35px] font-bold">
            Benefícios do Projetos
          </h1>
          <div className="flex mx-auto flex-wrap p-5 justify-center gap-5 border-4 border-yellow-400 rounded-lg  md:w-[1180px] text-white ">
            <Card
              title="Estrutura:"
              description="Normalmente feitas de metal ou material resistente, com uma plataforma plana ou com laterais."
            />
            <Card
              title="Rodas:"
              description="A maioria tem de duas a quatro rodas, dependendo da capacidade e do tipo."
            />
            <Card
              title="Sistema de Conexão: "
              description=" É acoplada ao veículo por meio de um engate, que pode ser do tipo esférico ou de pinhão."
            />
            <Card
              title="Capacidade de Carga:"
              description="Varia dependendo do modelo e do tamanho."
            />
          </div>
          <div className="flex justify-center p-5 ">
            {" "}
            <Button linke="#jkl" />
          </div>
        </div>

        <div className="bg-[#d19f37] p-5 flex justify-center">
          <div className="text-center space-y-4 w-[600px]">
            <h1 className="text-[35px] font-bold">
              O que é um Projeto de Carretinha?
            </h1>
            <p className="text-[19px] font-poppins ">
              Um projeto de carretinha é um planejamento detalhado de uma
              carretinha feita sob medida para diferentes finalidades, como
              transporte de cargas leves, uso agrícola, recreação ou até mesmo
              como suporte para pequenas empresas. Cada projeto é único, podendo
              incluir variações no tamanho, tipo de materiais e funcionalidades,
              para garantir que o cliente receba uma carretinha que atenda
              perfeitamente às suas necessidades.
            </p>
          </div>
        </div>

        <div className="bg-[#ebebeb] p-10 space-y-5 flex justify-center  ">
          <div className="  w-[800px] flex justify-around flex-wrap items-center">
            <h1 className="font-poppins font-bold text-4xl">
              Acesso Imediato <br />a Tudo isso Hoje!
            </h1>

            <div className="text-center ">
              <h2 className="font-poppins font-medium text-3xl">
                DE{" "}
                <span className="line-through font-semibold text-red-500 ">
                  R$ 120
                </span>{" "}
                POR
                <br /> <span className="text-7xl font-bold">R$ 50</span>
              </h2>
            
              <div id="jkl" className="text-center p-5 ">
                {" "}
                <Button linke="https://wa.me/+5577988526364" />
              </div>
            </div>
          </div>
        </div>
        {/* <Accordion type="single"  collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-poppins no-underline  text-[19px] px-[10px]"></AccordionTrigger>
            <AccordionContent className="px-[10px]">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion> */}
      </div>
    </>
  );
}

export default App;
