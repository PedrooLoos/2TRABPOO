import styled from 'styled-components'

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  width: 100%;
  max-width: 100%;
  margin: 30px auto 0;
  padding: 60px;
  background: #fff;
  border: 5px solid #ccc;
  border-radius: 15px;
  display: inline-block;
  flex-direction: column;

  input {
    margin-bottom: 10px;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  th, td {
    text-align: center;
    padding: 8px;
  }

  tr td {
    font-size: 20px;
    text-align: left;
    padding: 2px;
    border-bottom: 6px solid #9370DB;
    
  }
  th {
    background-color: #9370DB;
    color: white;
    border-radius: 60px;

  }

  h2 {
    font-family:courier,arial,helvetica;
    text-align: center;
    font-size: 50px;
    border-bottom: 6px solid #9370DB;
  }

`
export const Button = styled.button`
  background-color: #9370DB;
  color: white;
  padding: 14px 20px;
  height: 45px;
  width: center;
  border: none;
  border-radius: 60px;
`
export const Form = styled.form`
  font-family: "Poppins", sans-serif;
  width: 100%;
  max-width: 60%;
  margin: 30px auto 0;
  padding: 8px 0;
  background: #fff;
  
  border-radius: 30px;
  display: inlaine-block;
  flex-direction: column;
  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 50px;
    box-sizing: border-box; 
  }
`
