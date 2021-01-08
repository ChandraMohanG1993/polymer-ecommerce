/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-toggle-button/paper-toggle-button.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';

class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
      <style include="shared-styles">
      :host {
        display: block;

        padding: 10px;
      }
      .card {
        padding: 5px;
        margin: 15px;
        width: calc(100% - 40px);
        float: left;
      }
      .startmstell{
        padding: 15px;
        width: calc(100% - 30px);
        float: left;
        background: #f3f3f3;
        display: flex;
        justify-content: space-between;
      }
      .startmt{
        display: flex;
        align-items: center;
      }
      .s_div{
        width: auto;
        float: left;
        padding: 8px 15px;
        background: #f3e217;
        border-radius: 50px;
        color: white;
        font-weight: 600;
        font-family: sans-serif;
        margin-right: 10px;
      }
      .steel_div{
        width: auto;
        float: left;
      }
      .steel_div label{
        width: 100%;
        float: left;
        margin: 0px;
        line-height: 15px;
        font-size: 13px;
        font-weight: 600;
        color: black;
        letter-spacing: 0.5px;
      }
      .steel_div span{
        width: 100%;
        float: left;
        color: #8c8c8c;
        font-size: 12px;
      }
      .change_account_div p{
        font-size: 12px;
        color: #3b74f5;
        text-transform: uppercase;
      }
      .transaction_div{
        width: 100%;
        float: left;
        margin: 10px 0px;
      }
      .last_div{
        width: 25%;
        float: left;
      }
      .last_div p{
        margin: 0px;
        width: 74px;
        line-height: 15px;
        font-size: 13px;
        color: black;
      }
     
      .amount_div{
        width: 25%;
        float: left;
        text-align: center;
      }
      .amount_div label{ 
        width: 100%;
        float: left;
        color: black;
        font-weight: bold;
      }
      .amount_div span{
        width: 100%;
        float: left;
        color: #8c8c8c;
        font-size: 12px;
      }
      .date_div{
        width: 25%;
        float: left;
        text-align: center;
      }
     
      .date_div label{ 
        width: 100%;
        float: left;
        color: black;
        font-weight: bold;
        font-size: 14px;
      }
      .date_div span{
        width: 100%;
        float: left;
        color: #8c8c8c;
        font-size: 12px;
      }
      .repeat_div{
        width: 25%;
        float: left;
        text-align: right;
      }
      .repeat_div p{
        font-size: 12px;
        color: #3b74f5;
        padding-right: 15px;
        text-transform: uppercase;
      }
      .input_field_div{
        width: calc(50% - 200px);
        float: left;
      }
      .shedulepayment_div{
        width: 40%;
        float: right;
      }
      .m-r-250{
        margin-right: 200px;
        
      }
      .m-l-250{
        margin-left: 100px;
        width: calc(50% - 100px);
      }
      .payment{
        width: calc(100% - 0px);
        float: left;
        margin: 10px 0px;
      }
      .input-content ::slotted(input){
        color: black !important;
        font-size: 14px !important;
        font-weight: 500 !important;
      }
      .payment label{
        width: auto;
        float: left;
        color: black;
        font-size: 14px;
      }
      .btn_selction{
        width: 100%;
        float: left;   
      }
      .btn_selction ul{
        margin: 0px 10px;
        list-style: none;
        padding: 0px;
        display: inline;
      }
      .btn_selction ul li{
        display: inline;
        margin-right: 15px;
        line-height: 26px;
        width: 70px;
        cursor: pointer;
        font-size: 12px;
        text-align: center;
        border-radius: 47px;
        border: 1px solid gray;
        float: left;
      }
      .active_mnth{
        background: #2da0e4;
        color: white;
        border: 1px solid #2da0e4 !important;
      }
      .m-top_0{
        margin-top: 0px !important;
      }
      .bt_div{
        width: 100%;
        float: left;
        text-align: center;
        margin: 20px 0px;
      }
      .pink{
        color: #da7731;
        font-size: 13px;
        cursor: pointer;
        text-decoration: underline;
        border: 1px solid;
      }
      .indigo{
        font-size: 13px;
        background: #da7731;
        color: white;
        font-weight: 100;
      }
      @media screen and (max-width: 500px) {
        .transaction_details{
           width: 50%;
           text-align: left;
        }
      }
      @media screen and (max-width: 500px) {
        .input_field_div{
          width: 100%;
          margin: 0px;
       }
      }
      @media screen and (min-width: 641px) and (max-width: 750px) {
        .input_field_div{
          width: 100%;
          margin: 0px;
       }
      }
      @media screen and (min-width: 751px) and (max-width: 900px) {
        .m-l-250{
          margin-left: 00px;
          width: calc(50% - 00px);
        }
       .m-r-250 {
           margin-right: 50px;
            width: calc(50% - 50px);
        }
      }
      @media screen and (min-width: 901px) and (max-width: 1250px) {
        .m-l-250{
          margin-left: 20px;
          width: calc(50% - 20px);
        }
       .m-r-250 {
           margin-right: 50px;
            width: calc(50% - 50px);
        }
      }
      @media screen and (min-width: 501px) and (max-width: 640px) {
        .m-l-250{
          margin-left: 00px;
          width: calc(50% - 00px);
        }
       .m-r-250 {
           margin-right: 50px;
            width: calc(50% - 50px);
        }
      }
      </style>

      <div class="card">
        <div class="startmstell">
           <div class="startmt">
             <div class="s_div">
              S
             </div>
             <div class="steel_div">
              <label>Star Tmt Steel</label>
              <span>*9098<span>
             </div>
           </div>
           <div class="change_account_div">
            <p> Change Account</p>
           </div>
        </div>
        <div class="transaction_div">
          <div class="last_div transaction_details">
            <p>Last <br>transaction</p>
          </div>
          <div class="amount_div transaction_details">
            <label>$500.00</label>
            <span>Materials Purchased<span>
          </div>
          <div class="date_div transaction_details">
            <label>07 Oct 2017</label>
            <span>Transaction Date<span>
          </div>
          <div class="repeat_div transaction_details">
             <p>Repeat</p>
          </div>
        </div>
      </div>
      <div class="card m-top_0" >
        <div class="form">
          <div class="input_field_div m-r-250">
           <paper-input always-float-label label="Amount" value="$250.00"></paper-input>
          </div>
          <div class="input_field_div m-l-250">
           <div class="payment">
            <label>Schedule this payment</label>
            <paper-toggle-button checked style="float: right;"></paper-toggle-button>
          </div>
          <div class="btn_selction">
            <ul>
              <li class="active_mnth">Once</li>
              <li>Monthly</li>
              <li>Quartely</li>
              <li>Yearly</li>
            </ul>
          </div>
        </div>
          <div class="input_field_div m-r-250">
           <paper-input always-float-label label="Remarks" value="Janulary month payment"></paper-input>
          </div>
          <div class="input_field_div m-l-250"  >
           <paper-input always-float-label label="Start Date" value="13 Nov 2017"></paper-input>
          </div> 
          <div class="input_field_div m-r-250">
          <paper-input always-float-label label="Total no of occurance" value="20"></paper-input>
          </div>  
        </div>
      </div>
      <div class="bt_div">
          <paper-button class="pink">Back</paper-button>
          <paper-button raised class="indigo">Proceed</paper-button>
      </div>
    `;
  }
  static get properties() {
    return {

    };
  }
}

window.customElements.define('my-view2', MyView2);
