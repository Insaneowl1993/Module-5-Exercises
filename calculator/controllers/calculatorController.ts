import e, { Request, Response } from 'express';
import  QueryString from 'qs';
import { Calculator } from '../libraries/calculator';

let myCalculator = new Calculator();

export const addNumbers = (req: Request<{}, any, any, QueryString.ParsedQs, Record<string, any>>, res: Response) =>  {
    if(!/^\d+$/.test(req.query.num1 as string)) {
        res.status(400)
        res.json({error: "Invalid number" })
    }
    else if(!/^\d+$/.test(req.query.num2 as string)) {
        res.status(400)
        res.json({error: "Invalid number" })
    } else {
    let number1 = parseInt(req.query.num1 as string);
    let number2 = parseInt(req.query.num2 as string);
    let sum = myCalculator.add(number1, number2)
    res.status(200)
    res.json({result:sum})
    }    
};

export const subtractNumbers = (req: Request<{}, any, any, QueryString.ParsedQs, Record<string, any>>, res: Response) =>  {
    if(!/^\d+$/.test(req.query.num1 as string)) {
        res.status(400)
        res.json({error: "Invalid number" })
    }
    else if(!/^\d+$/.test(req.query.num2 as string)) {
        res.status(400)
        res.json({error: "Invalid number" })
    } else {
    let number1 = parseInt(req.query.num1 as string);
    let number2 = parseInt(req.query.num2 as string);
    let sum = number1 - number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
    }
};
   
export const multiplyNumbers = (req: Request<{}, any, any, QueryString.ParsedQs, Record<string, any>>, res: Response) =>  {
    if(!/^\d+$/.test(req.query.num1 as string)) {
        res.status(400)
        res.json({error: "Invalid number" })
    }
    else if(!/^\d+$/.test(req.query.num2 as string)) {
        res.status(400)
        res.json({error: "Invalid number" })
    } else {
    let number1 = parseInt(req.query.num1 as string);
    let number2 = parseInt(req.query.num2 as string);
    let sum = number1 * number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
    }
};

export const divideNumbers = (req: Request<{}, any, any, QueryString.ParsedQs, Record<string, any>>, res: Response) =>  { 
    if(!/^\d+$/.test(req.query.num1 as string)) {
        res.status(400)
        res.json({error: "Invalid number" })
    }
    else if(!/^\d+$/.test(req.query.num2 as string)) {
        res.status(400)
        res.json({error: "Invalid number" })
    } else {
    let number1 = parseInt(req.query.num1 as string);
    let number2 = parseInt(req.query.num2 as string);
    let sum = number1 / number2
    console.log(sum)
    res.status(200)
    if(isFinite(sum)) {
        res.status(200)
    res.json({result:sum})
    } else {
        res.status(400)
        res.json({error: "Cannot divide by zero" })
    }
    }
};