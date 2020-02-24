import dynamic from "next/dynamic";

const CarViewer = dynamic(() => import("../components/CarViewer"), {
  ssr: false
});

export default () => <CarViewer />;
