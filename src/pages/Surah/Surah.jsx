import { useContext, useEffect, useState } from "react";
import { SurahsContext } from "../../contexts/SurahsContext";
import style from "./Surah.module.css";
import { useLocation } from "react-router";

const Surah = () => {
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
  return (
    <div className={style.Surah}>
      <div className={style.names}>
        <h3>سورة {ar}</h3>
        <h3>{en}</h3>
      </div>
      <div className={style.ayah}>
      بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
      </div>
    </div>
  );
};

export default Surah;
