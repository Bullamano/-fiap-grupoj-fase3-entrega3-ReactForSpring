/**
 * URL da API desenvolvida em https://github.com/Bullamano/fiap-grupoj-fase3-entrega2-Spring
 */
const API = 'http://127.0.0.1:8080/api/v1/tutorialItem';

/**
 * Função de retorno de todos os itens da API
 * @returns JSON com todos os itens da API
 */
async function GetTutorialItems() 
{
    try 
    {
        const response = await fetch(API)
            .then((response) => response.json())

        //console.log(response);

        return response;
    }
    catch (error)
    {
        console.log("error", error);
    }
}

/**
 * Pesquisa de itens por ID
 * @param {int} id ID do item pesquisado
 * @returns JSON com o item pesquisado
 */
async function GetTutorialItemById(id) 
{
    try 
    {
        const response = await fetch(API + '/' + id)
            .then((response) => response.json())

        //console.log(response);

        return response;
    }
    catch (error)
    {
        console.log("error", error);
    }
}

/**
 * Inclusão de item na API
 * @param {String} title Título
 * @param {String} materials Materiais necessários
 * @param {String} steps Passo-a-passo
 * @param {String} imageUrl URL da imagem acompanhante
 * @param {String} category Categoria
 * @returns JSON com a resposta da API (o objeto incluso)
 */
async function PostTutorialItem(title, materials, steps, imageUrl, category) 
{
    try 
    {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    title: title,
                    materials: materials,
                    steps: steps,
                    imageUrl: imageUrl,
                    category: category
                }
            )
        }
        const response = await fetch(API, requestOptions)
            .then((response) => response.json())

        //console.log(response);

        return response;
    }
    catch (error)
    {
        console.log("error", error);
    }
}

/**
 * Inclusão de item na API
 * @param {String} title Título
 * @param {String} materials Materiais necessários
 * @param {String} steps Passo-a-passo
 * @param {String} imageUrl URL da imagem acompanhante
 * @param {String} category Categoria
 * @returns Resposta completa da promise (para uso do status)
 */
async function PostTutorialItemSimpleResponse(title, materials, steps, imageUrl, category) 
{
    try 
    {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    title: title,
                    materials: materials,
                    steps: steps,
                    imageUrl: imageUrl,
                    category: category
                }
            )
        }
        const response = await fetch(API, requestOptions);

        //console.log(response);

        return response;
    }
    catch (error)
    {
        console.log("error", error);
    }
}

/**
 * Modificação de um item na API
 * @param {int} id ID do objeto
 * @param {String} title Título
 * @param {String} materials Materiais necessários
 * @param {String} steps Passo-a-passo
 * @param {String} imageUrl URL da imagem acompanhante
 * @param {String} category Categoria
 * @returns JSON com a resposta da API (o objeto modificado)
 */
async function PutTutorialItem(id, title, materials, steps, imageUrl, category) 
{
    try 
    {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    title: title,
                    materials: materials,
                    steps: steps,
                    imageUrl: imageUrl,
                    category: category
                }
            )
        }
        const response = await fetch(API + '/' + id, requestOptions)
            .then((response) => response.json())

        //console.log(response);

        return response;
    }
    catch (error)
    {
        console.log("error", error);
    }
}

/**
 * Modificação de um item na API
 * @param {int} id ID do objeto
 * @param {String} title Título
 * @param {String} materials Materiais necessários
 * @param {String} steps Passo-a-passo
 * @param {String} imageUrl URL da imagem acompanhante
 * @param {String} category Categoria
 * @returns Resposta completa da promise (para uso do status)
 */
async function PutTutorialItemSimpleResponse(id, title, materials, steps, imageUrl, category) 
{
    try 
    {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    title: title,
                    materials: materials,
                    steps: steps,
                    imageUrl: imageUrl,
                    category: category
                }
            )
        }
        const response = await fetch(API + '/' + id, requestOptions);

        //console.log(response);

        return response;
    }
    catch (error)
    {
        console.log("error", error);
    }
}

/**
 * Delete de item da API
 */
async function DeleteTutorialItemById(id) 
{
    try 
    {
        const response = await fetch(API + '/' + id, { method: 'DELETE' });

        //console.log(response);

        return response;
    }
    catch (error)
    {
        console.log("error", error);
    }
}

export { GetTutorialItems, GetTutorialItemById, PostTutorialItem, PostTutorialItemSimpleResponse, PutTutorialItem, PutTutorialItemSimpleResponse, DeleteTutorialItemById }
