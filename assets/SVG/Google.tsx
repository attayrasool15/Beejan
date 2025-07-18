import * as React from 'react';
import Svg, {Rect, Defs, Pattern, Use, Image} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    width={21}
    height={21}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <Rect width={21} height={21} fill="url(#pattern0_58_1476)" />
    <Defs>
      <Pattern
        id="pattern0_58_1476"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use xlinkHref="#image0_58_1476" transform="scale(0.01)" />
      </Pattern>
      <Image
        id="image0_58_1476"
        width={100}
        height={100}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKBklEQVR4nO2dfVAU5x3Hn92DW2PbZNqZprlWbTTROIQABSkoniAI8eXACw4YLYhBQEDg5B0OyaEIqBzCgYigGF8x4ssd3BtEw91pJGqSvlibP5paNWmTtkmTxmjUEPl1FoNDDHIHu3u7e+xn5jvDDAP3/J4Pz/Pss/sch5CAgICAgICAgICAgIDAsIAKuUGuKAQU+AZQiI5AKmaB1fgfIRF/H1bh12EVfnXg6xT8AqTiFsgStUEBngdKt0BQIXz43yrgMJCGJoMC2wRr8PdgGXYTQhGAdIwhfzYGuwEp+NuQg5eCEkkEFY5IWIumwzrRIXgZ+xzmURBgL8EIYCX2KShEzaBEvxLkDJWAEAZ5eB7E4x9CCIMSRho95JRXhCeMazEQg0SwHquEl7CbTpcgfUSWY19AHq4ad2sO5OO5IMdusy5A+ojEYF9CPh6PXB1QuvtCHP4R6x0udSDkGpaI/xVy3T2RKwKFohaIQP2sd7R0lFmA+kGBqZGrAAVoEm9GhXSEJOIfQDV6EvEZKMKXQyT2DeudKaUpcuwOlLjNQ3wE8vCCgeHOdidKaU446odCt0zEJyADax7YfEldNKEIeDNSYL3oIKO7bCnLIWvLELUjPgCZWJPLy1DwRUYhnsvKrQ+pM0cGfgzxASjGYyHMBRdw6RAZWaKjiA+ACj0FUdhd1jtNKoyM+0Linbjpi8C+hd9h1yAdPwG5eCFkiiIhC3lCCnoCVGgClKCpUOoWDPkD33sdVmNXQIb1jYuRQQI5on1OkZCEn4N80eIxt7NYJIe1+BlYMgo5vJOhdPcZ2CQxJUKOfQ3Z2HZIQBNoazM5irKxOrt3mvkmg2TgoQ4TIsLRPUgV7YcU5M5Y21VIDArRPngR3XMNGcVuCkZkxOMfQh56xml1qMQeEIf/k98yAGGQhH9BqwiyI5Lxk+TjXFZqysA7Bm718E0GCVjFkXCKAMgW0SOD3L9k48Ws11XgNgfxEbCJ3wYbAQNpcgeIoCCD3NmvwxVs18RbwEaEPpAxmA4xQBw+tmkqDdvEdk28BqzE6z8QQqaHAFCK7neyo0LWidrYrofXwHn0OFiJr4cVMpi97gCLMfsyYrF/sbWAuwxgIZJHlDEYoxhgzQhTGPkUMRN5sF0P7wGb2OKQEDIWAqDc7f6RzYeFZIh2s10L7wEL+jFYiW8cFjKYNjHA0iFTmAy7w+QOfNwAVvGiUcsYTDdBXtp+t5BjO9muxSUAK7FtzEIGo3b7D2Qigu1aXAKwERcpC7ERG5lsY16DajvXUtqoTN/Ymh9MZnNLQSB9965sxE3KQs6IZyAGkRRcAi7nmeLz/SqVivqpejg7YQplGVbxdcQwEg50ur1U7cn5DeVCwUIsoD5difcihpFwoMPtZUNTcTblQsFKpNOwfqxDDCPhQIfbS1Z91SHKhYJVrKIsxEIsQAwj4UCH28va7TWnKRcKVqKaspCzxDTEMBIOdLi9vKLWXKBcKFjFuygL6UU/Qwwj4UCH20tcddNlyoWCVXyIspDLSIwYRsKBDreX2C27/065UEHIJdqExGzdQ4sQYcoqoEfICnXzX2gQIizqEpqEJFTveIeOESJc9hbQIySxps7ClY1hBmIYCQcWbXtR1FceplyocOvkEm1C8neU5VMXYpswWbi5eIkWITmNW+Zw5/b7W+LnEINIODAljZRfF70LCzUmeh7QgZW4QEVGn/Ux6O5+dj9ikDwGHzQtrDjyGVUhYeUnvqKtWLARW8cq4zPr45BvCIblusX3Et+a8xPEM1KatzwxU3n2HlUhceqmi7Q1CizEwrHI+PNpCcR3LAKZVj6QCkMA744ApdTVvEbHlJVWW13B2jGgfhsBR7s9IEq79IEMMom6iDvt7TEixBNUqhhxQJn5LlUZkwv/AEkazSRaGwc2cY8jMm5ZfwSVxsDviRiaKmPgAcQT0uqqdXSMjvDN7Z/T3jiwEUn2ZFzp+TkkdUY8UgaZZdrI/k262dSfLTNMeWPBHPJgAh1CVtc0HGXqsPWtR8l489RUWKaLHFHGYLI7Qz5BnAYwWeWhf9Mhg5yuUmu3MnPJD1biyMMi7lonQq3J3yERQ1NhmH0ScZTEWs0pOmSQkVUd/gdjDQUrMX+ojI8tP4VMfeioZZCJ1Mqh0hSwFXGMvB1ljb8s/BMtMshkaiqZfbse2MS9pIze01NguW7JmGQM5iVtFGiMvoyfSHGUksaSPHJHTZeMgDLzLXL6Q0zSd2airNXsPfAXTkXGkEUeaoyzNiOWyWtUqZ8ueoc2GWTW1NRWM95w8t5WVmfITTpkDJ2+NhqDOhA4/11VZD0Z9VVv0DlNkfEv67qNUt51zlsv9ht80ukaIUNT2DnvI3WX30ynFIEQOmby9MrXB3+ctC8NphVfpFVImqbauW/1LtEHXaVbiEwrhxitrF9t+O1J1WUPxk6qXG73ENeb/I6u0C7pH3zdhCMJ4FXaQ4uM0PITzr+sbzN7Pz+0ILqztiP8ttro35jSKZtIV5vb2z3EdWbf+uSOiNvDvebK9lgI2XyckgzyoiBhe1MQYoNGk99upoTIvgt5l3iTYXZva5eXbKztbO7yllcYAs/G6xZ9a+/1ok9GQ9S2PWMWEl+zk91/A7hBP5eRqUs2TBJ0C/tK9UF/qzH4H2sxeRce6PIMP3xq+rTe3kmPaUzPEge6Z0xtNfgs2GnwzVcb/Y+VGOZeWaVb1Dfa14k6KYfkpg2jlhFWfvwTFNPO7s3TA+emPZncEX7XWVJkTsya1hyYUvR7h2R4bejpU9SqnkZc4LDRU76cwfVExmISDyTDjJLeEWWQ0rLrKuIQl2jp8l4v10ax3oEyBhLXvgICNxqHlUHuX1arNdz89IR6s2/9ww+lXCWxx2NgYdXBHwiJUzdy+/nObrP3HleVIj8RDbG1mgcj45WaBi3iA9uNfrWuOn1FkutKU8m9dM22ZsQndpm9cmJ1rrfQv6xb0r/H/AL1E4hssP+N56OTOl3nkji1I+yO1vzci4jPHDTPlBTppdfZ7kwZxbxqCPqg7bTnL5Cr0GLy2UUOd7Y7VjbKrNQt7m81eTUgV+Q1g7dPkV7qtFstMgqJ1C0lR8XVgyYf1/9na81mn6z0jrBbbHe67BHJ1s+/0dblmYjGFYCwaoN/YWpn2JecEdEZ8r9mo3cZ+RQRjWeazT6KYr30GnnowdkSonWRUGKYe7Wt64VktvuBc9R3e01VG/z35+iD/7uUwd0+uWkt0Es/bTD5tew7PV34+G5H2GHxeKrB5PvqJsOcixmdoV8t08nGfIUWrY2ELP38G5XGgHM7jT7Knee8+P2JnVxApVLhO0x+c+uMs5R1xlmHKo0BPaWGoPdU+qD3C/XSa0r93Kvk1+XG2ecrDYFv1hpmHW42+uTuNfn4s3GaRUBAQEBAQEBAQEBAAPGE/wMysfvK1muaUwAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default SVGComponent;
