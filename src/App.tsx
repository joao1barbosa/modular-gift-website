import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuestionPage } from "./pages/QuestionPage";
import { ResponsePage } from "./pages/ResponsePage";

function  App() {
  const bgColor = import.meta.env.VITE_BACKGROUND_COLOR|| "#090909";

  console.log(bgColor);

  return (
    <div 
      className={`flex flex-col justify-center items-center h-screen w-screen text-zinc-200`}
      style={{ backgroundColor: bgColor }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuestionPage />} />
          <Route path="/response" element={<ResponsePage />} />

          {/* Redirecionar qualquer rota inexistente para a Home */}
          <Route path="*" element={<QuestionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
