import UserTemplate from '../../templates/UserTemplate/Template';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import styles from './TalkWithUs.module.css';

const TalkWithUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div>
        <UserTemplate>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.content}>
            <h1>Unybay</h1>
            <p>Acesse sua conta</p>
            {/* <div className={styles.form}> */}
            <input
              {...register('name', {
                required: 'Campo obrigatório',
              })}
              placeholder="Digite seu nome"
            />
            <ErrorMessage
              errors={errors}
              name="name"
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
              placeholder="Digite seu e-mail"
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
            <textarea
              {...register('message', {
                required: 'Campo obrigatório',
              })}
              placeholder="Digite sua mensagem"
              rows="5"
            />
            <ErrorMessage
              errors={errors}
              name="message"
              render={({ message }) => (
                <p className={styles.message}>{message}</p>
              )}
            />
            <button type="submit">Enviar</button>
          </form>
        </UserTemplate>
      </div>
    </div>
  );
};

export default TalkWithUs;
