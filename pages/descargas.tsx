
import DownloadCard from "../components/DownloadCard";


const Descargas = () => {
  return (
    <div className="bg-gray-50">
     

      {/* week days */}
      <div className="layout">
        <div id="monday" className="my-4">
          <h1>Lunes, 12</h1>
          <div className="bg-black w-full h-0.5"></div>
          {/* downloads */}
          <div className="grid grid-cols-2 mt-2">
            <DownloadCard title="Pozuelo" code="400318" />
            <DownloadCard title="Pozuelo" code="400318" />
            <DownloadCard title="Pozuelo" code="400318" />
            <DownloadCard title="Pozuelo" code="400318" />
            <DownloadCard title="Pozuelo" code="400318" />
          </div>
        </div>
        <div id="tuesday" className="my-4">
          <h1>Martes, 12</h1>
          <div className="bg-black w-full h-0.5"></div>
        </div>
        <div id="wed" className="my-4">
          <h1>wed, 12</h1>
          <div className="bg-black w-full h-0.5"></div>
        </div>
        <div id="thu" className="my-4">
          <h1>Lunes, 12</h1>
          <div className="bg-black w-full h-0.5"></div>
        </div>
        <div id="frid" className="my-4">
          <h1>Lunes, 12</h1>
          <div className="bg-black w-full h-0.5"></div>
        </div>
      </div>
    </div>
  );
};

export default Descargas;
