import { Button, Modal } from "flowbite-react";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { sendEvent } from "../analytics";
import ROUTER_PATHS from "../router/constants";


const ModalIR: React.FunctionComponent = () => {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = React.useState(true);

  React.useEffect(() => {
    sendEvent('Page View', {
      'Page Name': 'Modal IR'
    })
  }, []);

  const handleIR = () => {
      sendEvent('Click', {
          'Button Name': 'Faça parte dessa transformação',
          'Page Name': 'Model IR'
      })
      setOpenModal(false)
      navigate(ROUTER_PATHS.DOACAO);
  };

  return (
    <>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Imposto de Renda: Seja um doador de esperança!</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="font-rubikLight mb-4 font-light text-base text-justify">
            Em 2025, o IPLC quer mobilizar os contribuintes a destinarem através dos fundos municipais da criança, adolescente e pessoa idosa para a qualificação das atividades desenvolvidas junto a este público beneficiário. 
            </p>
            <p className="font-rubikLight mb-4 font-light text-base text-justify">Não deixe essa oportunidade passar! Informe-se, faça a doação e compartilhe essa ideia com seus amigos e familiares.</p>
            <p className="font-rubikLight mb-4 font-light text-base text-justify"><b>É bem simples para declarar esperança:</b> 
                <ul className="ps-4 mt-2 space-y-1 list-decimal list-inside">
                    <li className='font-rubikLight'>A doação não custa nada a mais para você.</li>
                    <li className='font-rubikLight'>Fortalece projetos sociais essenciais para crianças, adolescentes e idosos.</li>
                    <li className='font-rubikLight'>Contribui para o desenvolvimento da sua comunidade.</li>
                    <li className='font-rubikLight'>Você acompanha para onde está indo o seu imposto.</li>
                </ul>
            </p>
            <p className="font-rubikRegular mb-4 font-light text-base text-justify">Juntos, podemos continuar criando caminhos de oportunidades para um novo amanhã!</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="primary" onClick={handleIR}><span className="font-rubikLight text-white">Faça parte dessa transformação</span></Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Sair
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalIR;