/* eslint-disable react-refresh/only-export-components */

import MyDocument from "@/components/ui/myDocument/MyDocument";
import { PDFViewer } from "@react-pdf/renderer";

const PDF = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center text-3xl">
      <div className="w-[50%] h-[calc(100vh-100px)] border border-gray-300 rounded-lg">
        <PDFViewer className="w-full h-full">
          <MyDocument />
        </PDFViewer>
      </div>
    </div>
  );
};

export default PDF;
