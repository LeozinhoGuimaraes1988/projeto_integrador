import { useForm } from 'react-hook-form';
import AdminTemplate from '../../templates/AdminTemplate/AdminTemplate';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import styles from '../../pages/FormProduct/FormProduct.module.css';
import { useQuill } from 'react-quilljs';
import 'react-quill/dist/quill.snow.css';
import saveApiProduct from './Services';
import { useAuthSessionStore } from '../../hooks/AuthProvider'; // Ajuste o caminho conforme necessário

const schemaValidation = Yup.object().shape({
  name: Yup.string().required('O campo "Nome do produto" é obrigatório'),
  manufacturer: Yup.string().required('O campo "Fabricante" é obrigatório'),
  category: Yup.string().required('O campo "Categoria" é obrigatório'),
  price: Yup.number().required('O campo "Preço" é obrigatório'),
  url1: Yup.string().required('O campo "URL da imagem" é obrigatório'),
  url2: Yup.string().required('O campo "URL da imagem" é obrigatório'),
  description: Yup.string().required('O campo "Descrição" é obrigatório'),
});

const FormProduct = () => {
  const { token } = useAuthSessionStore();
  const { quill, quillRef } = useQuill();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue: setFormValue,
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });

  useEffect(() => {
    register('description'); // Register the field in react-hook-form
  }, [register]);

  useEffect(() => {
    Object.values(errors).forEach((error) => {
      toast.error(error.message);
    });
  }, [errors]);

  async function saveProduct(values) {
    try {
      await saveApiProduct({ ...values }, token);
      toast.success('Produto cadastrado com sucesso!');
    } catch (error) {
      toast.error('Erro ao cadastrar produto');
    }
  }

  const handleQuillChange = () => {
    const value = quill.root.innerHTML;
    setFormValue('description', value, { shouldValidate: true });
  };

  useEffect(() => {
    if (quill) {
      quill.on('text-change', handleQuillChange);
    }
  }, [quill]);

  const triggerSubmit = (event) => {
    event.preventDefault();
    document.getElementById('submit-button').click();
  };

  return (
    <div className={styles.formcontainer}>
      <AdminTemplate>
        <h1>Novo produto</h1>
        <form onSubmit={handleSubmit(saveProduct)}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <input
                {...register('name')}
                placeholder="Nome do produto"
                className={styles.content}
              />
            </div>
            <div className={styles.inputGroup}>
              <input {...register('manufacturer')} placeholder="Fabricante" />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <select {...register('category')} defaultValue="">
                <option value="" disabled>
                  Selecione uma opção
                </option>
                <option value="Jogos">Jogos</option>
                <option value="Roupas">Roupas</option>
                <option value="Veiculos">Veículos</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <input {...register('price')} placeholder="Preço" />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <input {...register('url1')} placeholder="URL da imagem" />
            </div>
            <div className={styles.inputGroup}>
              <input {...register('url2')} placeholder="URL da imagem" />
            </div>
          </div>

          <div className={styles.quill}>
            <div style={{ height: 200 }}>
              <div ref={quillRef} />
            </div>
          </div>

          <button type="submit" id="submit-button" style={{ display: 'none' }}>
            Submit
          </button>
        </form>
        <div className={styles.buttons}>
          <div className={styles.yes}>
            <button
              className={styles.modalButton}
              type="button"
              onClick={triggerSubmit}
            >
              Salvar
            </button>
          </div>
          <div className={styles.no}>
            <button className={styles.modalButton} type="button">
              Cancelar
            </button>
          </div>
        </div>
      </AdminTemplate>
      <ToastContainer />
    </div>
  );
};

export default FormProduct;
