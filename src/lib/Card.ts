import { Fetch } from './Fetch'
import { CardData } from '../types'

export class Card extends Fetch {
    public async render({
        name,
        bio,
        facebook,
        youtube,
        twitter,
        instagram,
        github,
        discord,
        telegram,
        linkedin,
        key = 'key',
        image = 'https://avatars.githubusercontent.com/u/96633239?v=4'
    }: CardData) {
        let avatar = await this.fetchImage(image.toString())
        let resKey = await this.fetchCount(key.toString())
        let { value } = JSON.parse(resKey)

        return `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="450" viewBox="0 0 900 450">
    <foreignObject x="0" y="0" width="900" height="450">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <div class="container">
          <div class="content">
            <div class="content-left">
              <span class="github-card">Github Card</span>
                <h1 class="name">${name ? name : '<span />'}</h1>
                <p class="about">${bio ? bio : '<span />'}</p>
                <div class="path"></div>
                <div class="views-wrap">
                ${key === 'key' ? '<span />' : `<span class="views">Profile Views: ${value}</span>`}
                </div>
              </div>
            <div class="content-right">
              <img src="${avatar}" alt="user-image" />
            </div>
          </div>
          <div class="social">
          ${
              facebook
                  ? `<div class="social-element">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  <p class="social-text">${facebook}</p>
                </div>`
                  : '<span />'
          }
          ${
              youtube
                  ? `<div class="social-element">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    <p class="social-text">${youtube}</p>
                </div>`
                  : '<span />'
          }
          ${
              twitter
                  ? `<div class="social-element">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    <p class="social-text">${twitter}</p>
                </div>`
                  : '<span />'
          }
          ${
              instagram
                  ? `<div class="social-element">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                    <p class="social-text">${instagram}</p>
                </div>`
                  : '<span />'
          }
          ${
              github
                  ? `<div class="social-element">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  <p class="social-text">${github}</p>
                </div>`
                  : '<span />'
          }
          ${
              discord
                  ? `<div class="social-element">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
                    <p class="social-text">${discord}</p>
                </div>`
                  : '<span />'
          }
          ${
              telegram
                  ? `<div class="social-element">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                    <p class="social-text">${telegram}</p>
                </div>`
                  : '<span />'
          }
          ${
              linkedin
                  ? `<div class="social-element">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    <p class="social-text">${linkedin}</p>
                </div>`
                  : '<span />'
          }
          </div>
        </div>
      </div>
    </foreignObject>
    <style>
      * {
        font-family: 'Poppins', sans-serif;
        line-height: normal;
      }
      img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 100%;
      }
      .container {
        background: #ecf0f1;
        background-image: url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2240%22%20viewBox%3D%220%200%2080%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Eleaf%3C%2Ftitle%3E%3Cg%20fill%3D%22%23eaeaea%22%20fill-opacity%3D%22undefined%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M2.011%2039.976c.018-4.594%201.785-9.182%205.301-12.687.475-.474.97-.916%201.483-1.326v9.771L4.54%2039.976H2.01zm5.373%200L23.842%2023.57c.687%205.351-1.031%2010.95-5.154%2015.06-.483.483-.987.931-1.508%201.347H7.384zm-7.384%200c.018-5.107%201.982-10.208%205.89-14.104%205.263-5.247%2012.718-6.978%2019.428-5.192%201.783%206.658.07%2014.053-5.137%2019.296H.001zm10.806-15.41c3.537-2.116%207.644-2.921%2011.614-2.415L10.806%2033.73v-9.163zM65.25.75C58.578-1.032%2051.164.694%2045.93%205.929c-5.235%205.235-6.961%2012.649-5.18%2019.321%206.673%201.782%2014.087.056%2019.322-5.179%205.235-5.235%206.961-12.649%205.18-19.321zM43.632%2023.783c5.338.683%2010.925-1.026%2015.025-5.126%204.1-4.1%205.809-9.687%205.126-15.025l-20.151%2020.15zm7.186-19.156c3.518-2.112%207.602-2.915%2011.55-2.41l-11.55%2011.55v-9.14zm-3.475%202.716c-4.1%204.1-5.809%209.687-5.126%2015.025l6.601-6.6V6.02c-.51.41-1.002.85-1.475%201.323zM.071%200C.065%201.766.291%203.533.75%205.25%207.422%207.032%2014.836%205.306%2020.07.071l.07-.071H.072zm17.086%200C13.25%203.125%208.345%204.386%203.632%203.783L7.414%200h9.743zM2.07%200c-.003.791.046%201.582.146%202.368L4.586%200H2.07z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');
        height: 450px !important;
      }
      .github-card {
        background: #181717;
        padding: 0.2rem 1rem;
        border-radius: 99999999px;
        font-size: 0.7rem;
        color: white;"
      }
      .title {
        font-weight: 600;
        text-align: center;
      }
      .name {
        font-weight: 600;
      }
      .content {
        display: flex;
        margin: 0 5rem;
        padding: 3rem 0;
        justify-content: space-between;
        align-items: center;
      }
      .content-left {
        width: 100%;
      }
      .path {
        width: 100%;
        border: none;
        border-bottom: 2px solid #666;
      }
      .views-wrap {
        margin: 1rem 0;
        display:flex;
        justify-content: center;
      }
      .views {
        background: #181717;
        padding: 0.2rem 1rem;
        border-radius: 99999999px;
        font-size: 0.7rem;
        color: white;"
      }
      .social {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
      .social-element {
        display: flex;
        margin: 0 0.3rem;
        align-items: center;
      }
      .social-text {
        margin: 1rem 0.5rem;
      }
    </style>
  </svg>`
    }
}
