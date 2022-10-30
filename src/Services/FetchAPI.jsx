import { useState } from "react";

const API = 'http://127.0.0.1:8080/api/v1/tutorialItem';

//TODO Comentar, retirar console.log e colocar tratamentos de erro

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
                    stepr: steps,
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

export { GetTutorialItems, GetTutorialItemById, PostTutorialItem, PostTutorialItemSimpleResponse, PutTutorialItem, DeleteTutorialItemById }
