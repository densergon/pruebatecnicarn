import { Account } from "../models/Account";
export const getAccounts = (): Promise<Account[]> => {
    return new Promise((resolve, reject) => {
        resolve([
            {
                id: 1,
                number: "987928374928347",
                balance: 200,
                type: "Cuenta Debito"
            },
            {
                id: 2,
                number: "0980948029483",
                balance: 300,
                type:"Cuenta Credito"
            }]
        );
        reject(new Error("Error al obtener las cuentas"));
    });
}