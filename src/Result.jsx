import {calculateInvestmentResults} from './util/investment';
import { formatter } from "./util/investment";


export default function Result({userData}){
    const initialInvestment=userData.initialInvestment;
const cal=calculateInvestmentResults(userData);
return<section id='result'>
    <table>
        <tr>
            <th>year</th> 
            <th>initialInvestment</th>
            <th>interest</th>
            <th>annualInvestment</th>
            <th>valueEndOfYear</th>
        </tr>
        {
            cal.map(rawData=>
            <tr>
                
                <td>{rawData.year}</td>
                <td>{formatter.format(initialInvestment)}</td>
                <td>{formatter.format(rawData.interest)}</td>
                <td>{formatter.format(rawData.annualInvestment
                )}</td>
                <td>{formatter.format(rawData.valueEndOfYear)}</td>
                
            </tr>
            )
        }
    </table>
</section>
}