# tarefas 


# import 'bootstrap/dist/css/bootstrap.min.css'; estilos do bootstrap
# !important = ordem de importancia, tira a prioridade do bootstrap e joga na propriedade que vc colocou
# hi guts
# oi
# oi'

1- import { useNavigate } from 'react-router-dom';

2 - const navigate = useNavigate()

3 - const handleFaq = () => {
  navigate('/perfil');
};
  
3 - onClick={handleFaq}


<!-- <header
        className={classNames(
          styles.header, 
          "d-flex", 
          "align-items-center", 
          "justify-content-between", 
          "text-white", 
          "p-3"
        )}
      >
        <i className="bi bi-arrow-left-short pointer" style={{ fontSize: '36px', cursor: 'pointer'}} onClick={handleBackHome}></i>
        <h2>Comunidade</h2>
        <i></i>
</header> -->