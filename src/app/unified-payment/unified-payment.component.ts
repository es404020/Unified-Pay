import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'unified-payment',
  templateUrl: './unified-payment.component.html',
  styleUrls: ['./unified-payment.component.scss'],

})
export class UnifiedPaymentComponent implements OnInit {

  @Input() fee: any = 0;
  @Input() description: string = '';

  @Input() amount: any = 0;
  @Input() currency: any = 0;
  @Input() secretkey: string = '';
  @Input() redirecturl: string = '';
  @Input() prod: any = 0;
  @Input() merchantid:string="";



  constructor() { }

  ngOnInit(): void {

  }


  onSubmit(){
    let f = document.createElement("form");
f.setAttribute("method", "post");
f.setAttribute(
  "action",
 this.prod==1? ''        :   'https://test.payarena.com/'+this.merchantid
); //Your action URL

//create hidden input elements
[
  {
    name: "secretKey",
    value: this.secretkey,
  },
  {
    name: "description",
    value: this.description
  },
  {
    name: "amount",
    value:this.amount
  },
  {
    name: "currency",
    value: this.currency,
  },
  {
    name: "redirectUrl",
    value:this.redirecturl,
  }
].forEach((item) => {
  let i = document.createElement("input");
  i.type = "hidden";
  i.name = item.name;
  i.value = item.value;
  f.appendChild(i); //Add it to the form
});

document.body.appendChild(f);//Add the form to the body
f.submit();
  }
}
