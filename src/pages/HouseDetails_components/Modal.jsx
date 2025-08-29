import { IoMdClose } from "react-icons/io";
import ModalNav from "./ModalNav";

function ModalElm({children, setModalShow}) {
  return (
      <>
      <div className='modal__container'>
        <div className='modal'>
          <button onClick={() => setModalShow(false)} className='close__modal__btn flex self-start'><IoMdClose /></button>
          {children}
          <ModalNav/>
        </div>
      </div>
      </>
  );
}

export default ModalElm;
