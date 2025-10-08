import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav";
import { villeinfos } from "../Tableaux/TableauxVille";
import { CircleChevronDown } from "lucide-react";
function FirstElement() {
  const [villeChoisi, setVilleChoisi] = useState();
  const navigate = useNavigate();

  const [data, setdata] = useState("");

  return (
    <>
      <div className="flex justify-center items-center gap-6 px-8 overflow-x-auto">
        <Nav />
      </div>
      <div className="flex justify-center items-center gap-8 px-8 py-12">
        {villeinfos.map((c) => (
          <div
            key={c.id}
            className="relative group cursor-pointer"
            onMouseEnter={() => setVilleChoisi(c.id)}
            onMouseLeave={() => setVilleChoisi(null)}
          >
            <img
              onClick={() => navigate(`/city/${c.name}`)}
              src={c.image}
              alt={c.alt}
              className={`
              w-80 h-60 
              rounded-2xl 
              shadow-2xl 
              object-cover
              transition-all 
              duration-500 
              ease-in-out
              ${
                villeChoisi === c.id
                  ? "scale-110 shadow-3xl brightness-110"
                  : "scale-100 blur-[2px] brightness-75"
              }
              ${villeChoisi === null ? "blur-0 brightness-100" : ""}
            `}
            />

            {/* Optionnel : Afficher le nom au hover */}
            {villeChoisi === c.id && (
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                <p className="font-semibold">{c.name}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center ">
        <CircleChevronDown />
      </div>
    </>
  );
}

export default FirstElement;
