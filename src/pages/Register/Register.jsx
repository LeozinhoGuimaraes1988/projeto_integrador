import AuthTemplate from '../../templates/AuthTemplate/AuthTemplate';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from '../Register/Register.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const Login = () => {
  const navigate = useNavigate();

  const schemaValidation = Yup.object().shape({
    name: Yup.string().required('O campo Nome é obrigatório'),
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O campo E-mail é obrigatório'),
    phone: Yup.string().required('O campo Telefone é obrigatório'),
    city: Yup.string().required('O campo Cidade é obrigatório'),
    state: Yup.string().required('O campo Estado é obrigatório'),
    password: Yup.string()
      .min(4, 'A senha precisa ter 4 caracteres')
      .required('O campo Senha é obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaValidation) });

  const createUser = (data) => {
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
        <form onSubmit={handleSubmit(createUser)} className={styles.content}>
          <h1>Unybay</h1>
          <p>Cadastre-se</p>
          <input {...register('name')} placeholder="Digite seu nome" />

          <input {...register('email')} placeholder="Digite seu e-mail" />

          <input {...register('phone')} placeholder="Digite seu telefone" />

          <input {...register('city')} placeholder="Digite seu cidade" />

          <input {...register('state')} placeholder="Digite seu estado" />

          <input
            {...register('password')}
            placeholder="Digite sua senha"
            type="password"
          />

          <button type="submit" className={styles.enter}>
            Entrar
          </button>
          <button
            type="button"
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
