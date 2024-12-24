import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill'

@Component({
  selector: 'app-payment-activity',
  imports: [QuillEditorComponent, FormsModule],
  templateUrl: './payment-activity.component.html',
  styleUrl: './payment-activity.component.css'
})
export class PaymentActivityComponent {
  htmlFormat = `<html>

<body>
    <table>
        <tr>
            <th style='text-align: left; padding-left: 5px;'>fieldName</th>
            <th style='text-align: left; padding-left: 5px;'>Old Value</th>
            <th style='text-align: left; padding-left: 5px;'>New Value</th>
            <th style='text-align: left; padding-left: 5px;'>Change</th>
        </tr>
        <tr>
            <td>subscriptionType</td>
            <td></td>
            <td>ANNUAL</td>
            <td></td>
        </tr>
        <tr>
            <td>priceGuarantee</td>
            <td></td>
            <td>true</td>
            <td></td>
        </tr>
        <tr>
            <td>package</td>
            <td></td>
            <td>Essential</td>
            <td></td>
        </tr>
        <tr>
            <td>individual</td>
            <td></td>
            <td>true</td>
            <td></td>
        </tr>
        <tr>
            <td>business</td>
            <td></td>
            <td>true</td>
            <td></td>
        </tr>
        <tr>
            <td>noOfUsers</td>
            <td></td>
            <td>2</td>
            <td></td>
        </tr>
        <tr>
            <td>storage</td>
            <td></td>
            <td>10240</td>
            <td></td>
        </tr>
        <tr>
            <td>webLibrary</td>
            <td></td>
            <td>basic</td>
            <td></td>
        </tr>
        <tr>
            <td>netAmount</td>
            <td></td>
            <td>995</td>
            <td></td>
        </tr>
        <tr>
            <td>serviceBureau</td>
            <td></td>
            <td>10</td>
            <td></td>
        </tr>
        <tr>
            <td>discountPrice</td>
            <td></td>
            <td>0</td>
            <td></td>
        </tr>
        <tr>
            <td>couponTag</td>
            <td></td>
            <td>0</td>
            <td></td>
        </tr>
    </table>
</body>

</html>`
}
