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
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';

class MyView3 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        .card {
          padding: 0px;
          margin: 30px 15px;
          width: calc(100% - 30px);
          float: left;
        }
        .submit_div{
          width: 100%;
          float: left;
          text-align: center;
          border-bottom: dotted;
          margin-bottom: 20px;
          position: relative;
        }
        .submit_div::before {
          content: '';
          display: inline-block;
          width: 15px;
          height: 15px;
          -moz-border-radius: 7.5px;
          -webkit-border-radius: 7.5px;
          border-radius: 7.5px;
          background-color: #eeeeee;
          position: absolute;
          left: -7px;
          bottom: -9px;
        }
        .submit_div::after {
          content: '';
          display: inline-block;
          width: 15px;
          height: 15px;
          -moz-border-radius: 7.5px;
          -webkit-border-radius: 7.5px;
          border-radius: 7.5px;
          background-color: #eeeeee;
          position: absolute;
          right: -7px;
          bottom: -9px;
        }
        .sunmit_icon{
          margin-top: -20px;
        }
        .sunmit_icon iron-icon{
          background: green;
          color: white;
          padding: 12px 12px;
          border-radius: 50px;
        }
        .submit_div p {
          width: 100%;
          float: left;
          margin-bottom: 0px;
          font-size: 16px;
          color: black;
          line-height: 10px;
          margin-top: 10px;
         
        }
        .submit_div span{
          font-size: 12px;
          color: gray;
        }
        .details{
          width: calc(100% - 30px);
          float: left;
          margin: 0px 15px 15px 15px;
        }
        .transaction_details{
          width: 33.333%;
          float: left
        }
        @media screen and (max-width: 610px) {
          .startmt{
            width: calc(50% - 00px);
            text-align: left;
            margin-bottom: 10px;
          }
          .amount_div {
            width: calc(50% - 00px);
            text-align: right;
            margin-bottom: 10px;
          }
          .date_div{
            width: calc(100% - 00px);
            text-align: center;
            margin-bottom: 10px;
          }
          .download_icon{
            width: 280px  !important;
          }
        
        }

        .startmt{
         
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
          margin-top: 5px;
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
        .amount_div{
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
        .download_icon{
          width: 400px;
          margin: auto;
          text-align: center;
        }
        .icon_d{
          width: 33.33%;
         float: left;
         text-align: center;
         margin-bottom: 15px;
        }
        .icon_d iron-icon{
          width: 100%;
          color: black;
        }
        .icon_d span{
          width: 100%;
          font-size: 12px;
        }
        .dangers{
          text-align: center;
          width: 100%;
          font-size: 11px;
          background: #dedede;
          padding: 8px 8px;
          border-radius: 10px;
          color: gray;
        }
        .dangers iron-icon{
          color: red;
        }

      </style>

      <div class="card">
         <div class="submit_div">
           <div class="sunmit_icon"><iron-icon icon="check"></iron-icon></div>
           <p>Submitted</p>
           <span>Your Request is submitted and awaits approval
         </div>
         <div class="details">
            <div class="startmt transaction_details">
                <div class="s_div">
                  S
                </div>
                <div class="steel_div">
                  <label>Star Tmt Steel</label>
                <span>*9098<span>
            </div>
          </div>
          <div class="amount_div transaction_details">
            <label>$500.00</label>
            <span>Materials Purchased<span>
          </div>
          <div class="date_div transaction_details">
            <label>07 Oct 2017</label>
            <span>Transaction Date<span>
          </div>
         </div>
         <div class="download_icon">
            <div class="icon_d">
                <iron-icon icon="file-download"></iron-icon>
                <span>download</span>
            </div>
            <div class="icon_d">
                <iron-icon icon="check"></iron-icon>
                <span>Share</span>
            </div>
            <div class="icon_d">
                <iron-icon icon="print"></iron-icon>
                <span>Print</span>
            </div>
         </div>
      </div>
      <div style="width: 100%;text-align: center;float: left;">
         <label class="dangers"> <iron-icon icon="error-outline"></iron-icon>Your transaction has been put for processing on high priority</label>
      </div>
    `;
  }
}

window.customElements.define('my-view3', MyView3);
