import styled from 'styled-components';

export const Container=styled.div`
    width:80%;
    margin: auto;
    display:flex;
    

    section{
        height:100%;
        width: 100%;
        background: black;
        display:flex;
        flex-flow: row wrap;
        

        .product-content{
            display:grid;
            text-align:center;
            height: 400px;
            background:#fff;
            border-radius:20px;
            padding: 12px;
            margin: 15px;
            width: 250px;
            

        }
    }
`