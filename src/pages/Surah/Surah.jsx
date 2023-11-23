import { useContext, useEffect , useState } from "react";
import { SurahsContext } from "../../contexts/SurahsContext";
import style from "./Surah.module.css";
import { useLocation } from "react-router";

const Surah = () => {
  const [ayahs , setAyahs] = useState([]);
  const location = useLocation();
  const { surahs } = useContext(SurahsContext);
  const surahNumber = location.pathname.split("/")[1];
  const [ar, setAr] = useState("");
  const [en, setEn] = useState("");
  useEffect(() => {
    if (surahs.length > 0) {
      const surah = surahs.find((surah) => surah.number == surahNumber);
      setAr(surah.arabicName);
      setEn(surah.englishName);
    }
  }, [surahs, surahNumber]);
  useEffect(() => {
    const func = async () => {
      const ayat = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/editions/quran-uthmani,en.asad,en.pickthall`, {
      method : 'GET'
    })
    const result = await ayat.json();
    setAyahs(result.data[0]['ayahs'])
    }
    func()
  } , [])
  console.log(ayahs)
  return (
    <div className={style.Surah}>
      <div className={style.names}>
        <h3>سورة {ar}</h3>
        <h3>{en}</h3>
      </div>
      {
        ayahs.length > 0 ? 
          ayahs.map((ayah) => {
            return (
              <div key={crypto.randomUUID()} className={style.ayah}>
                <p className={style.text}>{ayah.text}&nbsp;
                [{ayah.numberInSurah}]
                </p>

        </div>
            )
          })
         : <>
         <span className="loader"></span>
         <p className="mt-2">جاري التحميل...</p>
         </>
      }
    </div>
  );
};

export default Surah;
