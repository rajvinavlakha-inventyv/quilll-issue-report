import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill'

@Component({
  selector: 'app-email-activity',
  imports: [QuillEditorComponent, FormsModule],
  templateUrl: './email-activity.component.html',
  styleUrl: './email-activity.component.css'
})
export class EmailActivityComponent {
  htmlFormat = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <title>MyTAXPrepOffice: Demo Appointment Reminder</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style type="text/css">
        body,
        .maintable {
            height: 100% !important;
            width: 100% !important;
            margin: 0;
            padding: 0;
        }

        img,
        a img {
            border: 0;
            outline: none;
            text-decoration: none;
        }

        p {
            margin-top: 0;
            margin-right: 0;
            margin-left: 0;
            padding: 0;
        }

        .ReadMsgBody {
            width: 100%;
        }

        .ExternalClass {
            width: 100%;
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%;
        }

        img {
            -ms-interpolation-mode: bicubic;
        }

        body,
        table,
        td,
        p,
        a,
        li,
        blockquote {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        .MsgBody .bg-white .Object {
            color: #ffffff !important;
        }

        .MsgBody .bg-white .Object-hover,
        .MsgBody .bg-white .Object-hover:hover {
            color: #ffffff !important;
            text-decoration: none !important;
        }

        .MsgBody .bg-orange .Object {
            color: #f8981d !important;
        }

        .MsgBody .bg-orange .Object-hover,
        .MsgBody .bg-orange .Object-hover:hover {
            color: #f8981d !important;
            text-decoration: none !important;
        }

        .MsgBody .bg-black .Object {
            color: #000000 !important;
        }

        .MsgBody .bg-black .Object-hover,
        .MsgBody .bg-black .Object-hover:hover {
            color: #000000 !important;
            text-decoration: none !important;
        }

        .MsgBody .bg-primary .Object {
            color: #005074 !important;
        }

        .MsgBody .bg-primary span,
        .MsgBody .bg-primary {
            color: #005074 !important;
        }

        .MsgBody .bg-primary .Object-hover,
        .MsgBody .bg-primary .Object-hover:hover {
            color: #005074 !important;
            text-decoration: none !important;
        }

        .MsgBody .custom-date-color .Object {
            FONT-SIZE: 12px;
            COLOR: #000000 !important;
            LINE-HEIGHT: 19px
        }

        .MsgBody .contenttd p span.Object {
            color: #f8981d;
        }

        .MsgBody .disabled span.Object,
        .MsgBody .disabled span.Object a,
        .MsgBody .disabled span.Object a:hover,
        .MsgBody .disabled span.Object-hover,
        .MsgBody .disabled span.Object-hover a,
        .MsgBody .disabled span.Object-hover a:hover,
        .MsgBody .disabled span.Object-active,
        .MsgBody .disabled span.Object-active a,
        .MsgBody .disabled span.Object-active a:hover {
            pointer-events: none !important;
            color: #575757 !important;
            text-decoration: none !important;
            cursor: none !important;
        }

        /*p {display: table; table-layout: fixed; width: 100%; word-wrap: break-word;} */
    </style>
    <style type="text/css">
        @media only screen and (max-width: 480px) {
            .rtable {
                width: 100% !important;
            }

            .rtable tr {
                height: auto !important;
                display: block;
            }

            .contenttd {
                max-width: 100% !important;
                display: block;
                width: auto !important;
            }

            .contenttd:after {
                content: "";
                display: table;
                clear: both;
            }

            .hiddentds {
                display: none;
            }

            .imgtable,
            .imgtable table {
                max-width: 100% !important;
                height: auto;
                float: none;
                margin: 0 auto;
            }

            .imgtable.btnset td {
                display: inline-block;
            }

            .imgtable img {
                width: 100%;
                height: auto !important;
                display: block;
            }

            table {
                float: none;
            }

            .mobileHide {
                display: none !important;
            }

            .noresponsive p {
                display: table;
                table-layout: fixed;
                width: 100%;
                word-wrap: break-word;
            }
        }

        @media only screen and (min-width: 481px) {
            .desktopHide {
                display: none !important;
            }
        }
    </style>
    <!--[if gte mso 9]><xml>  <o:OfficeDocumentSettings>    <o:AllowPNG/>    <o:PixelsPerInch>96</o:PixelsPerInch>  </o:OfficeDocumentSettings></xml><![endif]-->
</head>

<body style="overflow: auto; padding:0; margin:0; font-size: 14px; font-family: arial, helvetica, sans-serif;
    cursor:auto; background-color:#e4e4e4"><span id="emc_preheader" style="FONT-SIZE: 0px; OVERFLOW: hidden;
        MAX-WIDTH: 0px; DISPLAY: none; LINE-HEIGHT: 0px; MAX-HEIGHT: 0px; opacity: 0">I'm looking forward to showing
        you how to grow a business with MyTAXPrepOffice.</span>
    <table style="BACKGROUND-COLOR: #e4e4e4" cellspacing="0" cellpadding="0" width="100%">
        <tr>
            <td style="FONT-SIZE: 0px; HEIGHT: 0px; LINE-HEIGHT: 0"></td>
        </tr>
        <tr>
            <td valign="top">
                <table class="rtable" style="WIDTH: 600px; MARGIN: 0px auto" cellspacing="0" cellpadding="0"
                    width="600" align="center" border="0">
                    <tr>
                        <th class="contenttd" style="BORDER-TOP: medium none; BORDER-RIGHT: medium none; WIDTH:
                            600px; BORDER-BOTTOM: medium none; FONT-WEIGHT: normal; PADDING-BOTTOM: 0px; TEXT-ALIGN:
                            left; PADDING-TOP: 0px; PADDING-LEFT: 0px; BORDER-LEFT: medium none; PADDING-RIGHT: 0px;
                            BACKGROUND-COLOR: transparent">
                            <table style="WIDTH: 100%" cellspacing="0" cellpadding="0" align="left">
                                <tr style="HEIGHT: 104px" height="104">
                                    <th class="contenttd" style="BORDER-TOP: medium none; BORDER-RIGHT: medium none;
                                        WIDTH: 352px; VERTICAL-ALIGN: middle; BORDER-BOTTOM: medium none; FONT-WEIGHT:
                                        normal; PADDING-BOTTOM: 20px; TEXT-ALIGN: left; PADDING-TOP: 20px; PADDING-LEFT:
                                        0px; BORDER-LEFT: medium none; PADDING-RIGHT: 15px; BACKGROUND-COLOR:
                                        transparent">
                                        <!--[if gte mso 12]>    <table cellspacing="0" cellpadding="0" border="0" width="100%"><tr><td align="left"><![endif]-->
                                        <table class="imgtable" style="MARGIN-LEFT: 0px; MARGIN-RIGHT: auto"
                                            cellspacing="0" cellpadding="0" border="0">
                                            <tr>
                                                <td style="PADDING-BOTTOM: 2px; PADDING-TOP: 2px; PADDING-LEFT: 2px;
                                                    PADDING-RIGHT: 2px" align="center">
                                                    <table cellspacing="0" cellpadding="0" border="0">
                                                        <tr>
                                                            <td style="BORDER-TOP: medium none; BORDER-RIGHT: medium
                                                                none; BORDER-BOTTOM: medium none; BORDER-LEFT: medium
                                                                none; BACKGROUND-COLOR: transparent"><a
                                                                    href="https://MyTAXPrepOffice.com/"
                                                                    target="_blank"><img title="Choose the plan that
                                                                        fits you and your business" style="BORDER-TOP:
                                                                        medium none; BORDER-RIGHT: medium none;
                                                                        BORDER-BOTTOM: medium none; BORDER-LEFT: medium
                                                                        none; DISPLAY: block" alt="Choose the plan
                                                                        that fits you and your business"
                                                                        src="https://staticmedia.MyTAXPrepOffice.com/staticmedia/images/common/Logo-MyTAXPrepOffice.png"
                                                                        width="215" hspace="0" vspace="0" /></a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table><!--[if gte mso 12]>    </td></tr></table><![endif]-->
                                    </th>
                                    <th class="contenttd" style="BORDER-TOP: medium none; BORDER-RIGHT: medium none;
                                        WIDTH: 218px; VERTICAL-ALIGN: middle; BORDER-BOTTOM: medium none; FONT-WEIGHT:
                                        normal; PADDING-BOTTOM: 20px; TEXT-ALIGN: left; PADDING-TOP: 20px; PADDING-LEFT:
                                        15px; BORDER-LEFT: medium none; PADDING-RIGHT: 0px; BACKGROUND-COLOR:
                                        transparent">
                                        <div style="PADDING-BOTTOM: 10px; TEXT-ALIGN: right; PADDING-TOP: 10px;
                                            PADDING-LEFT: 10px; PADDING-RIGHT: 10px">
                                            <table class="imgtable" style="DISPLAY: inline-block" cellspacing="0"
                                                cellpadding="0" border="0">
                                                <tr>
                                                    <td style="PADDING-RIGHT: 5px"> <a
                                                            href="https://www.facebook.com/MyTAXPrepOfficesoftware/"
                                                            target="_blank"><img title="Facebook"
                                                                style="BORDER-TOP: medium none; BORDER-RIGHT: medium
                                                                none; BORDER-BOTTOM: medium none; BORDER-LEFT: medium
                                                                none; DISPLAY: block" alt="Facebook"
                                                                src="https://staticmedia.MyTAXPrepOffice.com/staticmedia/images/common/icon-fb_32.png"
                                                                width="24" /></a> </td>
                                                    <td style="PADDING-RIGHT: 5px"> <a
                                                            href="https://twitter.com/MyTAXPrepOffice"
                                                            target="_blank"><img title="Twitter" style="BORDER-TOP:
                                                                medium none; BORDER-RIGHT: medium none; BORDER-BOTTOM:
                                                                medium none; BORDER-LEFT: medium none; DISPLAY: block"
                                                                alt="Twitter"
                                                                src="https://staticmedia.MyTAXPrepOffice.com/staticmedia/images/common/icon-twitter_32.png"
                                                                width="24" /></a> </td>
                                                    <td style="PADDING-RIGHT: 5px"> <a
                                                            href="https://www.linkedin.com/company/MyTAXPrepOffice"
                                                            target="_blank"><img title="Linkedin"
                                                                style="BORDER-TOP: medium none; BORDER-RIGHT: medium
                                                                none; BORDER-BOTTOM: medium none; BORDER-LEFT: medium
                                                                none; DISPLAY: block" alt="Linkedin"
                                                                src="https://staticmedia.MyTAXPrepOffice.com/staticmedia/images/common/icon-linkdin_32.png"
                                                                width="24" /></a> </td>
                                                    <td> <a href="https://www.youtube.com/channel/UCNOfaSV5N0VKwn28WpRp0sg"
                                                            target="_blank"><img title="Youtube" style="BORDER-TOP:
                                                                medium none; BORDER-RIGHT: medium none; BORDER-BOTTOM:
                                                                medium none; BORDER-LEFT: medium none; DISPLAY: block"
                                                                alt="Youtube"
                                                                src="https://staticmedia.MyTAXPrepOffice.com/staticmedia/images/common/icon-youtube_32.png"
                                                                width="24" /></a> </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </th>
                                </tr>
                            </table>
                        </th>
                    </tr>
                    <tr>
                        <th class="contenttd" style="BORDER-TOP: #f6b21d 5px solid; BORDER-RIGHT: medium none; WIDTH:
                            600px; BORDER-BOTTOM: medium none; FONT-WEIGHT: normal; PADDING-BOTTOM: 0px; TEXT-ALIGN:
                            left; PADDING-TOP: 0px; PADDING-LEFT: 0px; BORDER-LEFT: medium none; PADDING-RIGHT: 0px;
                            BACKGROUND-COLOR: #feffff">
                            <table style="WIDTH: 100%" cellspacing="0" cellpadding="0" align="left">
                                <tr style="HEIGHT: 1289px" height="1289">
                                    <th class="contenttd" style="BORDER-TOP: medium none; BORDER-RIGHT: medium none;
                                        WIDTH: 570px; VERTICAL-ALIGN: top; BORDER-BOTTOM: medium none; FONT-WEIGHT:
                                        normal; PADDING-BOTTOM: 0px; TEXT-ALIGN: left; PADDING-TOP: 20px; PADDING-LEFT:
                                        15px; BORDER-LEFT: medium none; PADDING-RIGHT: 15px; BACKGROUND-COLOR:
                                        transparent">
                                        <!--[if gte mso 12]>    <table cellspacing="0" cellpadding="0" border="0" width="100%"><tr><td align="center"><![endif]-->
                                        <table class="imgtable" style="MARGIN: 0px auto" cellspacing="0"
                                            cellpadding="0" align="center" border="0">
                                            <tr>
                                                <td style="PADDING-BOTTOM: 15px; PADDING-TOP: 2px; PADDING-LEFT: 2px;
                                                    PADDING-RIGHT: 2px" align="center">
                                                    <table cellspacing="0" cellpadding="0" border="0">
                                                        <tr>
                                                            <td style="BORDER-TOP: medium none; BORDER-RIGHT: medium
                                                                none; BORDER-BOTTOM: medium none; BORDER-LEFT: medium
                                                                none; BACKGROUND-COLOR: transparent"><a
                                                                    href="https://www.MyTAXPrepOffice.com/easy-to-switch"
                                                                    target="_blank"><img class="max-width"
                                                                        border="0" style="display:block;
                                                                        color:#000000; text-decoration:none;
                                                                        font-family:Helvetica, arial, sans-serif;
                                                                        font-size:16px; max-width:100% !important;
                                                                        width:100%; height:auto !important;"
                                                                        width="560" alt="MyTAXPrepOffice awards / 6
                                                                        great reasons to buy today"
                                                                        data-proportionally-constrained="true"
                                                                        data-responsive="true"
                                                                        src="http://cdn.mcauto-images-production.sendgrid.net/dc62986bb80bec95/cfe6f516-d531-402a-aaea-20ab0d65cecd/600x227.png"></a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table><!--[if gte mso 12]>    </td></tr></table><![endif]-->
                                        <p style="FONT-SIZE: 18px; MARGIN-BOTTOM: 1em; FONT-FAMILY: geneve, arial,
                                            helvetica, sans-serif; MARGIN-TOP: 0px; COLOR: #005074; TEXT-ALIGN: center;
                                            LINE-HEIGHT: 28px; BACKGROUND-COLOR: transparent; mso-line-height-rule:
                                            exactly" align="center"><strong>Demo Appointment Reminder for Your MyTAXPrepOffice Demo
                                                Appointment</strong></p>
                                        <p class="bg-black" style="FONT-SIZE: 14px; MARGIN-BOTTOM: 1em; FONT-FAMILY:
                                            arial, helvetica, sans-serif; MARGIN-TOP: 0px; COLOR: #575757; TEXT-ALIGN:
                                            left; LINE-HEIGHT: 22px; BACKGROUND-COLOR: transparent;
                                            mso-line-height-rule: exactly" align="left">Hello
                                            Rajvi,<br />&nbsp;<br />nThis is a friendly Demo Appointment Reminder of your
                                            appointment&nbsp;on <strong>5/31/2025&nbsp;at&nbsp;08:00 AM&nbsp;EASTERN
                                                STANDARD TIME (EST)</strong> for&nbsp;your MyTAXPrepOffice
                                            demonstration.</p>
                                        <p class="bg-black" style="FONT-SIZE: 14px; MARGIN-BOTTOM: 1em; FONT-FAMILY:
                                            arial, helvetica, sans-serif; MARGIN-TOP: 0px; COLOR: #575757; TEXT-ALIGN:
                                            left; LINE-HEIGHT: 22px; BACKGROUND-COLOR: transparent;
                                            mso-line-height-rule: exactly" align="left"><strong>Please be sure to
                                                verify the appointment time is correct for your time zone.</strong> (For
                                            example, if the appointment time is 10:30 am EST, then&nbsp;your
                                            appointment&nbsp;will be 9:30 am CST.)</p>
                                        <p class="bg-black" style="FONT-SIZE: 14px; MARGIN-BOTTOM: 1em; FONT-FAMILY:
                                            arial, helvetica, sans-serif; MARGIN-TOP: 0px; COLOR: #575757; TEXT-ALIGN:
                                            left; LINE-HEIGHT: 22px; BACKGROUND-COLOR: transparent;
                                            mso-line-height-rule: exactly" align="left">MyTAXPrepOffice is a
                                            <strong>trusted, top-rated</strong> online professional tax preparation
                                            software. Using our <strong>modern technology</strong>, our loyal customers
                                            enjoy <strong>complete mobility</strong>; prepare taxes anywhere, any time,
                                            on any device. Complete your mobile office with our free, <strong>secure
                                                client portal</strong> for remote two-way communication with your
                                            clients.</p>
                                        <p class="bg-black" style="FONT-SIZE: 14px; MARGIN-BOTTOM: 1em; FONT-FAMILY:
                                            arial, helvetica, sans-serif; MARGIN-TOP: 0px; COLOR: #575757; TEXT-ALIGN:
                                            left; LINE-HEIGHT: 22px; BACKGROUND-COLOR: transparent;
                                            mso-line-height-rule: exactly" align="left">Combined with our
                                            <strong>excellent customer support</strong>, you&rsquo;re ready to power
                                            your business with functionality, accuracy, and ease, all for an affordable
                                            price.</p>
                                        <p class="bg-black" style="FONT-SIZE: 14px; MARGIN-BOTTOM: 1em; FONT-FAMILY:
                                            arial, helvetica, sans-serif; MARGIN-TOP: 0px; COLOR: #575757; TEXT-ALIGN:
                                            left; LINE-HEIGHT: 22px; BACKGROUND-COLOR: transparent;
                                            mso-line-height-rule: exactly" align="left">With&nbsp;our <strong>low
                                                bank product fees</strong>, we know MyTAXPrepOffice can help save you
                                            money and grow your business. <strong><br /></strong></p>
                                        <p style="FONT-SIZE: 14px; MARGIN-BOTTOM: 1em; FONT-FAMILY: arial, helvetica,
                                            sans-serif; MARGIN-TOP: 0px; COLOR: #575757; TEXT-ALIGN: left; LINE-HEIGHT:
                                            22px; BACKGROUND-COLOR: transparent; mso-line-height-rule: exactly"
                                            align="left"><strong>Be sure to ask your MyTAXPrepOffice Account Executive
                                                about our multi-year deals for two years which include:</strong></p>
                                        <ul style="FONT-SIZE: 14px; MARGIN-BOTTOM: 1em; FONT-FAMILY: arial, helvetica,
                                            sans-serif; MARGIN-TOP: 0px; COLOR: #575757; TEXT-ALIGN: left; PADDING-LEFT:
                                            20px; LINE-HEIGHT: 22px; BACKGROUND-COLOR: transparent;
                                            mso-line-height-rule: exactly" align="left">
                                            <li class="disabled" style="TEXT-ALIGN: left">E-filing for tax years
                                                2019, 2020, 2021, 2022, and 2023</li>
                                            <li style="TEXT-ALIGN: left">Unlimited tax preparation</li>
                                            <li style="TEXT-ALIGN: left">Unlimited e-filing</li>
                                            <li style="TEXT-ALIGN: left">Federal and all states</li>
                                            <li style="TEXT-ALIGN: left">Individual and business returns*</li>
                                            <li class="disabled" style="TEXT-ALIGN: left">Business and specialty
                                                modules (1065, 1120, 1120S, 1041, 990, 706 and 709)</li>
                                            <li style="TEXT-ALIGN: left">After-the-Fact Payroll</li>
                                            <li style="TEXT-ALIGN: left">Integrated bank products with three trusted
                                                financial partners to choose from</li>
                                            <li style="TEXT-ALIGN: left">Client portal for quick and easy
                                                communication between you and your clients</li>
                                            <li style="TEXT-ALIGN: left">Signature pad app included</li>
                                            <li style="TEXT-ALIGN: left">45-Day Refund Policy (<a title=""
                                                    style="TEXT-DECORATION: none; COLOR: #c28607"
                                                    href="https://www.MyTAXPrepOffice.com/refund-policy"
                                                    target="_blank">see policy here</a>)</li>
                                        </ul>
                                        <p style="FONT-SIZE: 10px; MARGIN-BOTTOM: 1em; FONT-FAMILY: arial, helvetica,
                                            sans-serif; MARGIN-TOP: 0px; COLOR: #575757; TEXT-ALIGN: left; PADDING-LEFT:
                                            0px; LINE-HEIGHT: 16px; BACKGROUND-COLOR: transparent; mso-line-height-rule:
                                            exactly" align="left">&nbsp;<br /><span style="FONT-SIZE: 18px;
                                                FONT-FAMILY: geneve, arial, helvetica, sans-serif; COLOR: #005074;
                                                LINE-HEIGHT: 28px"><span style="FONT-SIZE: 14px; FONT-FAMILY: arial,
                                                    helvetica, sans-serif; COLOR: #575757; LINE-HEIGHT: 22px">We look
                                                    forward to speaking with you today and welcoming you to the
                                                    MyTAXPrepOffice family.</span></span></p>
                                        <p style="FONT-SIZE: 10px; MARGIN-BOTTOM: 1em; FONT-FAMILY: arial, helvetica,
                                            sans-serif; MARGIN-TOP: 0px; COLOR: #575757; TEXT-ALIGN: left; PADDING-LEFT:
                                            0px; LINE-HEIGHT: 16px; BACKGROUND-COLOR: transparent; mso-line-height-rule:
                                            exactly" align="left"><span style="FONT-SIZE: 14px; LINE-HEIGHT:
                                                22px">Sincerely,</span></p>
                                        <p style="FONT-SIZE: 10px; MARGIN-BOTTOM: 1em; FONT-FAMILY: arial, helvetica,
                                            sans-serif; MARGIN-TOP: 0px; COLOR: #575757; TEXT-ALIGN: left; PADDING-LEFT:
                                            0px; LINE-HEIGHT: 16px; BACKGROUND-COLOR: transparent; mso-line-height-rule:
                                            exactly" align="left"><span style="FONT-SIZE: 14px; LINE-HEIGHT:
                                                22px"><em>The MyTAXPrepOffice Team</em></span><br /></p>
                                    </th>
                                </tr>
                            </table>
                        </th>
                    </tr>
                    <tr>
                        <th class="contenttd" style="BORDER-TOP: #f8981d 5px solid; BORDER-RIGHT: medium none; WIDTH:
                            600px; BORDER-BOTTOM: medium none; FONT-WEIGHT: normal; PADDING-BOTTOM: 0px; TEXT-ALIGN:
                            left; PADDING-TOP: 0px; PADDING-LEFT: 0px; BORDER-LEFT: medium none; PADDING-RIGHT: 0px;
                            BACKGROUND-COLOR: #feffff">
                            <table style="WIDTH: 100%" cellspacing="0" cellpadding="0" align="left">
                                <tr style="HEIGHT: 114px" height="114">
                                    <th class="contenttd" style="BORDER-TOP: medium none; BORDER-RIGHT: medium none;
                                        WIDTH: 570px; VERTICAL-ALIGN: top; BORDER-BOTTOM: medium none; FONT-WEIGHT:
                                        normal; PADDING-BOTTOM: 20px; TEXT-ALIGN: left; PADDING-TOP: 20px; PADDING-LEFT:
                                        15px; BORDER-LEFT: medium none; PADDING-RIGHT: 15px; BACKGROUND-COLOR:
                                        transparent">
                                        <p style="FONT-SIZE: 14px; MARGIN-BOTTOM: 1em; FONT-FAMILY: arial, helvetica,
                                            sans-serif; MARGIN-TOP: 0px; COLOR: #575757; TEXT-ALIGN: center;
                                            LINE-HEIGHT: 22px; BACKGROUND-COLOR: transparent; mso-line-height-rule:
                                            exactly" align="center"><a title="MyTAXPrepOffice Demo Page"
                                                style="FONT-SIZE: 14px; TEXT-DECORATION: none; COLOR: #c28607"
                                                href="https://MyTAXPrepOffice.com/democenter" target="_blank"><span
                                                    style="COLOR: #005074"><strong>To change your appointment time,
                                                        please call 307.414.1211.&nbsp;<br /></strong> <span
                                                        style="FONT-SIZE: 10px; COLOR: #a7a7a7; LINE-HEIGHT:
                                                        16px"><br /><span style="FONT-SIZE: 12px; LINE-HEIGHT:
                                                            19px">*Individual Pro includes 1040
                                                            only.</span></span></span></a></p>
                                    </th>
                                </tr>
                            </table>
                        </th>
                    </tr>
                    <tr>
                        <th class="contenttd" style="BORDER-TOP: medium none; BORDER-RIGHT: medium none; WIDTH:
                            600px; BORDER-BOTTOM: medium none; FONT-WEIGHT: normal; PADDING-BOTTOM: 0px; TEXT-ALIGN:
                            left; PADDING-TOP: 0px; PADDING-LEFT: 0px; BORDER-LEFT: medium none; PADDING-RIGHT: 0px;
                            BACKGROUND-COLOR: #0b5175">
                            <table style="WIDTH: 100%" cellspacing="0" cellpadding="0" align="left">
                                <tr style="HEIGHT: 20px" height="20">
                                    <th class="contenttd" style="BORDER-TOP: medium none; BORDER-RIGHT: medium none;
                                        WIDTH: 270px; VERTICAL-ALIGN: top; BORDER-BOTTOM: medium none; FONT-WEIGHT:
                                        normal; PADDING-BOTTOM: 5px; TEXT-ALIGN: left; PADDING-TOP: 5px; PADDING-LEFT:
                                        15px; BORDER-LEFT: medium none; PADDING-RIGHT: 15px; BACKGROUND-COLOR:
                                        transparent"></th>
                                    <th class="contenttd" style="BORDER-TOP: medium none; BORDER-RIGHT: medium none;
                                        WIDTH: 270px; VERTICAL-ALIGN: middle; BORDER-BOTTOM: medium none; FONT-WEIGHT:
                                        normal; PADDING-BOTTOM: 5px; TEXT-ALIGN: left; PADDING-TOP: 5px; PADDING-LEFT:
                                        15px; BORDER-LEFT: medium none; PADDING-RIGHT: 15px; BACKGROUND-COLOR:
                                        transparent"></th>
                                </tr>
                            </table>
                        </th>
                    </tr>
                    <tr>
                        <th class="contenttd" style="BORDER-TOP: medium none; BORDER-RIGHT: medium none; WIDTH:
                            600px; BORDER-BOTTOM: medium none; FONT-WEIGHT: normal; PADDING-BOTTOM: 1px; TEXT-ALIGN:
                            left; PADDING-TOP: 1px; PADDING-LEFT: 0px; BORDER-LEFT: medium none; PADDING-RIGHT: 0px;
                            BACKGROUND-COLOR: transparent">
                            <table style="WIDTH: 100%" cellspacing="0" cellpadding="0" align="left">
                                <tr style="HEIGHT: 165px" height="165">
                                    <th class="contenttd" style="BORDER-TOP: medium none; BORDER-RIGHT: medium none;
                                        WIDTH: 570px; VERTICAL-ALIGN: top; BORDER-BOTTOM: medium none; FONT-WEIGHT:
                                        normal; PADDING-BOTTOM: 15px; TEXT-ALIGN: left; PADDING-TOP: 15px; PADDING-LEFT:
                                        15px; BORDER-LEFT: medium none; PADDING-RIGHT: 15px; BACKGROUND-COLOR:
                                        #feffff">
                                        <!--[if gte mso 12]>    <table cellspacing="0" cellpadding="0" border="0" width="100%"><tr><td align="center"><![endif]-->
                                        <table class="imgtable" style="MARGIN: 0px auto" cellspacing="0"
                                            cellpadding="0" align="center" border="0">
                                            <tr>
                                                <td style="PADDING-BOTTOM: 15px; PADDING-TOP: 15px; PADDING-LEFT: 0px;
                                                    PADDING-RIGHT: 0px" align="center">
                                                    <table cellspacing="0" cellpadding="0" border="0">
                                                        <tr>
                                                            <td style="BORDER-TOP: medium none; BORDER-RIGHT: medium
                                                                none; BORDER-BOTTOM: medium none; BORDER-LEFT: medium
                                                                none; BACKGROUND-COLOR: transparent"><a
                                                                    href="https://www.bbb.org/us/ga/rome/profile/computer-software-developers/MyTAXPrepOffice-0483-40107942"><img
                                                                        title="BBB" style="BORDER-TOP: medium none;
                                                                        BORDER-RIGHT: medium none; BORDER-BOTTOM: medium
                                                                        none; BORDER-LEFT: medium none; DISPLAY: block"
                                                                        alt="Tax Preparation Software with Expert
                                                                        Support"
                                                                        src="https://staticmedia.MyTAXPrepOffice.com/staticmedia/images/common/Logo-BBB.png"
                                                                        width="146" hspace="0" vspace="0" /></a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table><!--[if gte mso 12]>    </td></tr></table><![endif]-->
                                        <p style="FONT-SIZE: 10px; MARGIN-BOTTOM: 0px; FONT-FAMILY: arial, helvetica,
                                            sans-serif; MARGIN-TOP: 0px; COLOR: #7c7c7c; TEXT-ALIGN: center;
                                            LINE-HEIGHT: 12px; BACKGROUND-COLOR: transparent; mso-line-height-rule:
                                            exactly" align="center"><span style="FONT-SIZE: 12px; LINE-HEIGHT:
                                                15px">Advanced Tax Solutions LLC &bull; 1603 Capitol Avenue, Suite 310
                                                A254 &bull; Cheyenne, WY 82001<br />n307.414.1211 &bull; <a
                                                    title="MyTAXPrepOffice Home Page" style="COLOR: #dfe0e0"
                                                    href="https://MyTAXPrepOffice.com/" target="_blank"><span
                                                        style="COLOR:
                                                        #7c7c7c">MyTAXPrepOffice.com</span></a><br />nIf you no longer
                                                wish to receive these emails, simply click on the following
                                                link:&nbsp;<a title="Unsubscribe" style="COLOR: #dfe0e0"
                                                    href="https://MyTAXPrepOffice.com/unsubscribe"
                                                    target="_blank">Unsubscribe</a></span></p>
                                    </th>
                                </tr>
                            </table>
                        </th>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td style="FONT-SIZE: 0px; HEIGHT: 8px; LINE-HEIGHT: 0">&nbsp;</td>
        </tr>
    </table><!-- Created with MailStyler 2.22.02.21 -->
</body>

</html>`
}
