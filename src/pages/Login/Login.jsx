import AuthTemplate from '../../templates/AuthTemplate/AuthTemplate';
import { useEffect } from 'react';
import styles from '../Login/Login.module.css';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import * as Yup from 'yup';
// O hookform resolver faz o vínculo com o yup
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  // Implementando o useForm
  // Register: registra os elementos de input
  // Handlesubmit: função que dispara quando o usuário submita o formulário

  // Criando a validação do formulário
  const schemaValidation = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O campo Email é obrigatório'),
    password: Yup.string()
      .min(4, 'A senha precisa ter 4 caracteres')
      .required('O campo Senha é obrigatório'), // Após o min, posso colocar max
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaValidation) });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    toast.success('Login realizado com sucesso!');
    navigate('/dashboard');
  };

  useEffect(() => {
    Object.values(errors).forEach((error) => {
      toast.error(error.message);
    });
  }, [errors]);

  return (
    <div>
      <AuthTemplate>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.content}>
          <h1>Unybay</h1>

          <p>Acesse sua conta</p>

          <input {...register('email', {})} placeholder="Digite seu e-mail" />

          <input
            {...register('password', {})}
            placeholder="Digite sua senha"
            type="password"
          />

          <button type="submit" className={styles.enter}>
            Entrar
          </button>

          <button
            className={styles.register}
            onClick={() => navigate('/register')}
          >
            Cadastre-se
          </button>
        </form>
      </AuthTemplate>
      <ToastContainer />
    </div>
  );
};

export default Login;

// EXPLICAÇÕES ÚTEIS
/* 
O useEffect é um hook do React que executa um efeito colateral (side effect) 
sempre que um valor específico muda. Neste caso, o efeito colateral é executado 
sempre que o objeto errors muda. Aqui está o que acontece:

Object.values(errors): Isso obtém um array com todos os valores do objeto errors. 
Cada valor é um objeto de erro contendo a mensagem de erro associada a um campo específico 
do formulário.

.forEach((error) => { ... }): Isso itera sobre cada erro no array. 
Para cada erro, a função fornecida é executada.

toast.error(error.message): Para cada erro, uma notificação de erro é 
exibida usando o react-toastify. A mensagem de erro (error.message) é
 mostrada na tela para informar ao usuário sobre o erro específico de validação.
 */
