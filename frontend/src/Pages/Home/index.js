import { FaSearch, FaRegCalendarAlt } from "react-icons/fa";
import { FaArrowsRotate, FaPerson } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";

function Home() {
  const [inputClicado, setInputClicado] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputClicado) {
      inputRef.current.focus();
    }
  }, [inputClicado]);

  const origemClick = () => {
    setMensagem("De onde você vai sair");
  };

  const destinoClick = () => {
    setMensagem("Para onde você vai?");
  };

  const locateClose = () => {
    setMensagem("");
    setInputClicado(false);
  };

  const handleBoxClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left; // posição x dentro da caixa
    const width = rect.width; // largura da caixa
    setInputClicado(true);
    // Verificar se o clique foi na metade esquerda ou direita da caixa
    if (x < width / 2) {
      origemClick();
    } else {
      destinoClick();
    }
  };

  const cards = [
    {
      texto: "CVC+",
      desc: "Aperte o play",
      img: "https://www.cvc.com.br/platform/assets/home/_next/static/images/card_cvc_plus2-e884bdaa3aac8cf7afc0a3b549653b43.png",
    },
    {
      texto: "Promoção de Pacotes",
      desc: "Ofertas Imperdíveis",
      img: "https://www.cvc.com.br/platform/assets/home/_next/static/images/card_saldao-b7db334142f95e235563f9f582337e85.png",
    },
    {
      texto: "Dicas de Viagem",
      desc: "Confira nosso blog",
      img: "https://www.cvc.com.br/platform/assets/home/_next/static/images/card_blog-cvc-a05068887c9bb7a1e3b0ef98d8e05498.png",
    },
    {
      texto: "Lojas CVC",
      desc: "Uma perto de você",
      img: "https://www.cvc.com.br/platform/assets/home/_next/static/images/card_loja_cvc-4a9291a4ed5f87000017feedcd739caa.jpg",
    },
  ];

  return (
    <div className="h-screen w-screen">
      <div className="w-full h-3/6 bg-yellow-400 grid grid-rows-3 grid-flow-col gap-3 place-content-center flex py-6">
        <div className="w-full md:w-3/4 lg:w-1/2 h-5/2">
          <h1 className="text-4xl font-extrabold text-balance">
            <span className="text-blue-800 text-wrap">Economize</span> muito com
            as melhores ofertas de viagens
          </h1>
        </div>
        <div className="mt-3 h-2/6 w-2/6 text-nowrap grid grid-cols-1 md:grid-cols-2 gap-2 font-semibold">
          <button className="bg-blue-900 text-white rounded-2xl h-5/6 text-sm p-2">
            Aéreo + Hotel
          </button>
          <button className="text-blue-900 border border-blue-900 rounded-2xl h-5/6 text-sm">
            Pacote completo
          </button>
        </div>
        <div className="grid grid-cols-3 w-full h-5/6 relative">
          <div className="absolute h-full w-2/4 flex justify-content-center grid grid-cols-2 gap-3">
            {inputClicado ? (
              <div className="mr-3 h-full">
                <div className="h-4/6 w-full flex items-center relative">
                  <FaSearch className="text-gray-400 left-1 absolute" />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder={mensagem}
                    className="py-3 pr-3 focus:outline-none bg-white rounded-lg"
                  />
                  <IoClose
                    onClick={locateClose}
                    size="25"
                    className="text-gray-400 cursor-pointer right-3 absolute"
                  />
                </div>
              </div>
            ) : (
              <div className="h-full w-full" onClick={handleBoxClick}>
                <div className="pl-5 grid grid-cols-4 gap-2 text-nowrap bg-white rounded-lg h-4/6 relative">
                  <div className="flex flex-col items-center justify-center">
                    <h1 className="font-black text-sm">Origem</h1>
                    <p className="text-xs text-gray-500">
                      De onde você vai sair?
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-blue-900 text-white rounded-xl w-1/2 h-2/6 flex items-center justify-center">
                      <FaArrowsRotate />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h1 className="font-black text-sm">Destino</h1>
                    <p className="text-xs text-gray-500">Para onde vai?</p>
                  </div>
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 gap-0 place-content-center bg-white h-4/6 rounded-lg text-nowrap">
              <div className="flex flex-row justify-center w-full items-center">
                <div className="flex flex-col items-center w-1/2 m-3">
                  <FaRegCalendarAlt />
                  <h1 className="text-sm font-bold">Data de ida</h1>
                </div>
                {/* Divider vertical */}
                <div className="w-0.5 bg-gray-300"></div>
                <div className="flex flex-col items-center w-1/2 m-3">
                  <FaRegCalendarAlt />
                  <h1 className="text-sm font-bold">Data de volta</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute grid grid-cols-2 gap-3 left-2/4 h-full w-2/4 pl-3">
            <div className="grid grid-cols-1 place-content-center bg-white h-4/6 rounded-lg text-nowrap">
              <div className="ml-3 flex flex-row gap-3 items-center">
                <IoPersonOutline className="" size="20" />
                <h1 className="font-bold">1 Quarto - 2 Viajantes</h1>
              </div>
            </div>
            <div className="h-full">
              <button className="rounded-lg bg-blue-900 h-4/6 w-full text-nowrap">
                Buscar Pacotes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-16 bg-yellow-400 absolute">
        <div className="scale-75 grid grid-cols-4 gap-0 place-items-center container-fluid">
          {cards.map((item, i) => (
            <div
              className="grid grid-cols-2 max-h-5/6 w-5/6 rounded-lg"
              key={i}
            >
              <img
                src={item.img}
                alt={item.texto}
                className="img-fluid h-full w-full rounded-lg"
              />
              <div className="grid grid-rows-2 gap-0 bg-white">
                <h1 className="text-xl font-black p-2">{item.texto}</h1>
                <h1 className="text-md font-extralight m-2 p-1">{item.desc}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
