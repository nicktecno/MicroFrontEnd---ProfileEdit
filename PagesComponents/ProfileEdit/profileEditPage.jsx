import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// componentes boostrap
import { Container, Row, Col } from "react-bootstrap";

// Css do componente
import * as S from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";

import InputMask from "react-input-mask";
import notification from "../../services/notification";

function ProfileEditComponent({
  mktName,
  setCartLength,
  api,
  routeTranslations,
}) {
  const [userData, setUserData] = useState({});
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [sexo, setSexo] = useState("");
  const [aniversario, setAniversario] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [ie, setIe] = useState("");
  const [cpf, setCpf] = useState("");
  const [mask, setMask] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const history = useRouter();
  const [activeIE, setActiveIE] = useState(false);

  const [fotoAdicionar, setFotoAdicionar] = useState("inativo");

  // eslint-disable-next-line no-unused-vars
  let isValid = true;

  function handleBack() {
    history.push("/profile");
  }

  function FormataStringData(data) {
    var dia = data.split("/")[0];
    var mes = data.split("/")[1];
    var ano = data.split("/")[2];

    return ano + "-" + ("0" + mes).slice(-2) + "-" + ("0" + dia).slice(-2);
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
  }

  async function handleCadastro() {
    const dataUpdate = {
      first_name: nome,
      last_name: sobrenome,
      gender: sexo,
      date_of_birth: FormataStringData(aniversario),
      phone:
        "+55" +
        telefone
          .replace("(", "")
          .replace(")", "")
          .replace("-", "")
          .replace(" ", "")
          .replace("_", ""),
      email: email,
      vat_number: cpf.replace("-", "").split(".").join("").replace("/", ""),
      ie_number: ie,
      password: senha,
      password_confirmation: confirmaSenha,
      anonymous: false,
    };

    getEmailValid(email);

    if (senha !== "" && confirmaSenha !== "" && senha === confirmaSenha) {
      try {
        const token = localStorage.getItem(mktName);
        if (token) {
          api.defaults.headers.Authorization = `Bearer ${token}`;
        } else {
          notification("Sua sessão expirou, faça o login novamente", "error");
          sessionStorage.setItem("urlantiga", window.location.href);

          setCartLength("0");
          setTimeout(function () {
            window.location.href = "/login";
          }, 3000);
        }

        const { data: response } = await api.put(
          "/customer/profile",
          dataUpdate
        );

        if (response.message === "Sua conta foi atualizada com sucesso") {
          notification("Sua conta foi atualizada com sucesso", "success");
        }
      } catch (err) {
        console.error(err);
      } finally {
      }
    } else {
      notification(
        "Você precisa confirmar sua senha para atualizar seus dados cadastrais",
        "error"
      );
    }
  }

  useEffect(() => {
    const token = localStorage.getItem(mktName);

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
    } else {
      history.push("/");
    }

    async function getUser() {
      try {
        const token = localStorage.getItem(mktName);
        if (token) {
          api.defaults.headers.Authorization = `Bearer ${token}`;
        } else {
          notification("Sua sessão expirou, faça o login novamente", "error");
          sessionStorage.setItem("urlantiga", window.location.href);

          setCartLength("0");
          setTimeout(function () {
            window.location.href = "/login";
          }, 3000);
        }

        const { data: response } = await api.get("/customer/get");
        if (response.vat_number.length <= 11) {
          setMask("999.999.999-99");
          setActiveIE(false);
        }
        if (response.vat_number.length >= 14) {
          setMask("99.999.999/9999-99");
          setActiveIE(true);
        }

        setUserData({
          name: response.first_name,
          sur: response.last_name,
          email: response.email,
        });

        setNome(response.first_name);
        setSobrenome(response.last_name);
        setSexo(response.gender);
        setEmail(response.email);
        setCpf(response.vat_number);
        setIe(response.ie_number);
        setTelefone(
          response.phone !== null ? response.phone.replace("+55", "") : ""
        );
        setAniversario(
          response.date_of_birth !== null
            ? response.date_of_birth.split("-").reverse().join("/")
            : ""
        );
      } catch (err) {
        console.error(err);
      } finally {
      }
    }

    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getEmailValid(email) {
    var pattern = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );

    if (!pattern.test(email)) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      isValid = false;

      notification("Email inválido", "error");
      return false;
    }

    return true;
  }

  return (
    <>
      {/* <S.ModalAdicionarFoto className={fotoAdicionar}>
        <S.Transparente
          onClick={() => {
            document.body.style.overflow = "auto";
            setFotoAdicionar("inativo");
          }}
        />
        <S.centroAdicionarFoto>
          <div className="cabecalho">Adicionar Foto de Perfil</div>
          <div className="title">
            <h3>Arraste uma imagem para adicionar ou</h3>

            <div className="botaoUpload">UPLOAD MANUAL</div>
          </div>
          <div className="containerBotoes">
            <div
              onClick={() => {
                document.body.style.overflow = "auto";
                setFotoAdicionar("inativo");
              }}
              className="botaoNao"
            >
              VOLTAR
            </div>
            <div className="botaoSim">SALVAR</div>
          </div>
        </S.centroAdicionarFoto>
      </S.ModalAdicionarFoto> */}

      <S.caminho>
        <Container>
          <Row>
            <Col>
              <p>
                <Link href="/profile">Minha Conta</Link> &#62;{" "}
                <span>Editar Conta</span>
              </p>
            </Col>
          </Row>
        </Container>
      </S.caminho>

      <S.ContainerForm>
        <S.nome>
          <button className="backButton" onClick={handleBack}>
            <S.ArrowIcon />
            Voltar
          </button>
          <div className="containerTitle">
            {
              <h2>
                {userData.name} {userData.sur}
              </h2>
            }

            {<h3>{userData.email}</h3>}
          </div>
          {/* <div className="containerImagem">
            <div className="imagem">
              <div
                className="alterar"
                onClick={() => {
                  document.body.style.overflow = "hidden";
                  setFotoAdicionar("ativo");
                }}
              >
                <Edit />
                Mudar Foto
              </div>
            </div>
          </div> */}
        </S.nome>

        <S.topicos>
          <S.edit>
            <p>Nome</p>
            <span>
              <input
                className="selectCategory"
                placeholder="Digite seu NOME"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </span>
          </S.edit>
          <S.edit>
            <p>Sobrenome</p>
            <span>
              <input
                className="selectCategory"
                placeholder="Digite seu SOBRENOME"
                type="text"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
              />
            </span>
          </S.edit>
          <S.edit>
            <p>E-mail</p>
            <span>
              <input
                className="selectCategory"
                placeholder="Digite seu E-MAIL"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>
          </S.edit>
          <S.edit>
            <p>Telefone</p>
            <span>
              <InputMask
                mask="(99) 99999-9999"
                className="selectCategory"
                placeholder="Telefone"
                type="text"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </span>
          </S.edit>

          <S.edit>
            <p>Nascimento</p>
            <span>
              <InputMask
                mask="99/99/9999"
                className="selectCategory"
                placeholder="Data de Nascimento"
                type="text"
                value={aniversario}
                onChange={(e) => setAniversario(e.target.value)}
              />
            </span>
          </S.edit>

          <S.edit>
            <p>Sexo</p>
            <span>
              <select
                className="selectCategory"
                onChange={(e) => setSexo(e.target.value)}
              >
                <option>Sexo</option>
                <option
                  value="male"
                  defaultValue={sexo === "male" && "selected"}
                >
                  Masculino
                </option>
                <option
                  value="female"
                  defaultValue={sexo === "female" && "selected"}
                >
                  Feminino
                </option>
              </select>
            </span>
          </S.edit>

          <S.edit>
            <p>CPF/CNPJ</p>
            <span>
              <InputMask
                mask={mask}
                className="selectCategory"
                placeholder="Digite seu CPF/CNPJ (Apenas Números)"
                alwaysShowMask
                type="text"
                value={cpf}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                  if (cpf.length <= 11) {
                    setMask("999.999.999-99");
                  }
                  if (cpf.length >= 11) {
                    setMask("99.999.999/9999-99");
                  }
                }}
                onBlur={(e) => {
                  if (cpf.length === 0) {
                    setMask("");
                  }
                }}
                onChange={(e) => {
                  {
                    const targetEdited = e.target.value
                      .replace(".", "")
                      .replace(".", "")
                      .replace("-", "")
                      .replace("/", "")
                      .replace("_", "")
                      .replace("_", "")
                      .replace("_", "")
                      .replace("_", "")
                      .replace("_", "")
                      .replace("_", "")
                      .replace("_", "")
                      .replace("_", "")
                      .replace("_", "")
                      .replace("_", "")
                      .replace("_", "")
                      .replace("_", "")
                      .replace("_", "")
                      .replace("_", "");

                    setCpf(targetEdited);

                    if (targetEdited.length <= 11) {
                      setIe("");
                      setActiveIE(false);
                    }
                    if (targetEdited.length > 11) {
                      setActiveIE(true);
                    }
                  }
                }}
              />
            </span>
          </S.edit>
          {activeIE === true ? (
            <S.edit>
              <p>Inscrição Estadual</p>
              <span>
                <InputMask
                  id="ie"
                  className="selectCategory"
                  placeholder="Digite sua Incrição Estadual"
                  type="number"
                  value={ie}
                  onChange={(e) => {
                    setIe(e.target.value);
                  }}
                />
              </span>
            </S.edit>
          ) : (
            ""
          )}
          <S.edit className="cinza alerta">
            <p>
              Para poder alterar seus dados cadastrais, é obrigatório digitar
              sua senha e confirmar.
            </p>
          </S.edit>
          <S.edit>
            <p>Senha</p>
            <span>
              <input
                className="selectCategory"
                placeholder="Digite sua senha"
                type="password"
                onChange={(e) => setSenha(e.target.value)}
              />
            </span>
          </S.edit>
          <S.edit>
            <p>Confirmar Senha</p>
            <span>
              <input
                className="selectCategory"
                placeholder="Confirme sua senha"
                type="password"
                onChange={(e) => setConfirmaSenha(e.target.value)}
              />
            </span>
          </S.edit>
          <S.ContainerBotoes>
            <button
              className="botaoSim positiveButton"
              onClick={handleCadastro}
            >
              ATUALIZAR
            </button>

            <button className="botaoNao negativeButton" onClick={handleBack}>
              CANCELAR
            </button>
          </S.ContainerBotoes>
        </S.topicos>
      </S.ContainerForm>
    </>
  );
}

export default ProfileEditComponent;
