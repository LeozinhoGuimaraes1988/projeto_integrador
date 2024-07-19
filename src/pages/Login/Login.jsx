import AuthTemplate from '../../templates/AuthTemplate/AuthTemplate';
import styles from '../Login/Login.module.css';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <AuthTemplate>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.content}>
          <h1>Unybay</h1>

          <p>Acesse sua conta</p>
          {/* <div className={styles.form}> */}
          <input
            {...register('email', {
              required: 'Campo obrigatório',
            })}
            placeholder="Digite seu e-mail"
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => (
              <p className={styles.message}>{message}</p>
            )}
          />
          {/* </div> */}
          {/* <div className={styles.form}> */}
          <input
            {...register('password', {
              required: 'Campo obrigatório',
            })}
            placeholder="Digite sua senha"
            type="password"
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => (
              <p className={styles.message}>{message}</p>
            )}
          />
          {/* </div> */}
          <button type="submit">Entrar</button>
        </form>
      </AuthTemplate>
    </div>
  );
};

export default Login;
