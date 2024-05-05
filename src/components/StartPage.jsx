import React from 'react'

const StartPage = ({ onClick }) => {

    const sendCategory = (category) =>{
        onClick(category)
    }

    return (
        <>
            <div className="container"> 
                <div className="description">
                    <p className="title start-title">Welcome to the <br /><b>Frontend Quiz!</b></p>
                    <p className="instruction">Pick a subject to get started.</p>
                </div>
                <div className="option">
                    <div 
                        className="options"
                        tabIndex="0"
                        onClick={() => sendCategory("html")}
                    >
                        <div className="options-logo logo-htm">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA/FJREFUWEftlk1s22QYx/+Pm5apEUiI9TCEtPKllcbZJsZhRxAcEKzjRBESpQ4aFR+aBNLilIpJPrBudSrtgABtTIvTIsTYBW0DIYHYdYdtsNXpPthhQ4gdOoRgStiaxA96HbtxXTtxSqA9LCfHft7n/fl5/s/fL2GV/WiV8eAOULOOtLVCBX14BMBmZjLB1RPy6PQvzQD8z9sKZOrKSQBPik2YeFsynf96xYBY06RC99UigDUCIsbSPX2ZwzdXDKigK5sZ+NEGYFyWM8aGVmFEfNtaNqOn3iTwxzYEIS+nDWVFgQpZZYoZQzYP0RuJdO7Afwp0UtNid+O3rie0g6WgjUxduQzg0ZqgrU3J9NR5cX1aG+m+ifvnn9K0ShTASC07O57q6YzxMQIuyqqR8ie+NDmytmzNzzn3byVKvXHSNEv8N7OKwYwN5Qptf3ws58aEsjUFOj85vEWq0nEQ1jnj/FIynf/Sm9HMKgNgHHPu/SCrxtPiuqArCgM5R+jXrQ4e2Lgrf6ZRpRoCmXpqB2pC7awnIV1Wcxlv0oKu7GFgrHaPP5DV/G4bKKvozEh7YssAvSWruUNhUIFAQi893dc+Alg4r/u7zYzXkxlj2p+skSHOTChDRPgUwF2elzo4V1r/dpCulgB59LLVs/E1WNIL8ujhc36YKIZo7nttE6TqCYAecNczcCpIV4uAbHNjfOPqxW4A+Huulgc3vvf5H4HTZW9m/SSeEXApoRp9QXEXxl+9rxqTjgCw9eXqigjPJVTDXu/kqF2cPjDSuebP+YsAHnLDCdjbX+rd7U5M0EatGKJdzfjVcTDqGiS+Mru+1Dc4eLS6FOiv27NgesQFYuJ9cvHB9xsBtWKITnv3ABhdeLkwIBFgj7iFbwFa6ynhd1LFevmxsanfA1sWYoj+WNGySoy+INAz9Wd8w5LwrNcKloh6dv8r67gcO87AFs/CX2F1bPOLupEheoGcF/3KK2oCzlBnZaD/3c+ue2MDx76gvdiFePyQ+21yFiwZ+zBD9G7gjL3wna6FqhOmUSzuSGhH5/2VbGiMQrAAf0hAR72FPJlQ87bZhRmiG2tOKPtBeKc+VKgCtDOp5j4Jav8iUYcFzE4oWy2yPws9zoJUQjUMcd3shLjo0wHMSYzt/RnjVNhekYBE0IKuCKZ7zoliiGLtzETqiET8cJBegsCaflzdRUJXf+PemHv8qLlvc0M8lx2Kx4q3ykF6+VdA/sWtGGKjFrUk6kaJWjHE/wXIzA7/7Lq694TYyuZta1lUQ1wOXGRRe5NHMcTlwEQee3/yC3uV3moHP08gmQln5bQhDmBt+S2rQm3ZOSTJHaBm1V11FfoHPSzcNNT4pFQAAAAASUVORK5CYII="/></div>
                        <div className="options-name">HTML</div>
                    </div>
                    <div 
                        className="options"
                        tabIndex="0"
                        onClick={() => sendCategory("css")}
                    > 
                        <div className="options-logo logo-css"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA+xJREFUWEftl12I3FQUx/9ndmYWbKlgKYqi4j6ICNoHC+IkbaFvtpsMRcddbZFqu7XQUneShwoq+KCgQmawWrT1GxV0V1snq5ZCpeAmU4R9sA+FoohQ8QO/qkLVdCY5cnc+NrOTZGaSLRTxPN7cc+7vnnPuOSeES0zoEuPBfxOoMPf05XV3efrI7Xt+TerxxB5SLUMF0TsAUsT8YEXW30sClQhItcubAP4QQLoJ4RKhUMlpR+JCxQYKgGkxuAC2mpL2bhyoWEARMC0GBnBfHKiBgfqASQQ1ENAAMLGh+gaKARMLqi+g5tM+DGAoTqLO6xBtN3PF13rp9wRS7FKegGkAmV7GenxngHebkv5i1L5IoLxdeoCBV8X9EsK01Qn8WEXSnwqzF3qQerIswePZpYTxUU2aOe25IKhwoGrpNBg3N5VOkYfHOYUPliB08yaZsWNG1oT3OyQQaPPnL6x06xd+ae782/NSN320dvJs3jI2MpGZKLkXjmdmjM/I2pSfKBBodNZYnUrRF42r4BtT1kZaSvlqaTMz3hfNdAnyykm7dMPhdcUfWrYCgcQ44TjZ3xYOpX2mVHy2paRUy/cSs+jwSZPdAddGTHnf95FA4qNqlw4BmGhvZJqoyMVX2p5qvMCedSXCiy6Y7jHloqhvvnwP0SicOLDcyToWgNXNLUzMoxVZ/6SlolqlXSBE1pUQ8x4R7g4aUyJdrlrPXA3KnPUl8QlT0jb4D8lb5R1M/PIA+eQRaKwiFUUedkkokDJ38LKUc/44A3c0tTyAVFMqfrzYimKVthOhHc4IuEgYoRcIJGDI+esYwHIrXL3mm3zVuJ+Z3ohIdJdA42GeCU3qwuknss7vK44DWNu+KdNWUy6KVzUvStUYJaaXiFn3z9CKbWwj0OsBHurpmVAgxS4/SeBHQ2Fs4y4CiUG+0fkXdXHVKu0B4XkflAficTOniwbdUzpCVqiWrnAYokI31rs8M19/3l5cFAn8cEXS99/52f5VmaH6pwBuaYeaeKxfmK4cUuzyBgILg0I6XlRAOP4EsMJ35SqA6wFc01yrM3h8RtJF/+tbOjzU0TKAM1cNL7v10JqHaqptTAAkCmUjSsDJVDqruG7tGJhvCzyNsc2UtTf7JlmwvaCyc+5g5sd/zp8DYVlz9SsAPwPI+QyfGh6+sH56zSN/NFpM5gBAW3zffyLCrrj/Zl3PPm8ZY0wU9k/1Zc1Ny0fX7RWQbdk0Wx7JANd5adRq54bmjm7c6wzqGZ/3u1VVq7wFxGKAWunb+FaWMDmd00TTvWgSWqkLU1ND9Wu/u5HruJI97+vKev3bi0bhM5x0fFhyxv+Bern0X/vGeTSq8ik5AAAAAElFTkSuQmCC"/>  </div>
                        <div className="options-name">CSS</div>
                    </div>
                    <div 
                        className="options"
                        tabIndex="0"
                        onClick={() => sendCategory("javascript")}
                    > 
                        <div className="options-logo logo-js"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAntJREFUWEftmE9o02AYxp83HbbqQXTgxaMH3cSNpgVRL0NGOgUFb4ri/IemFRl48TDBDg+KIB6EJJfJVPSoMA+adMoOgoK228Q/B3fQgQoOvVRYLSSvfjMt7RZJD4n0kN76fe33/PK8Tx5ICG32oTbjQQTkN5FlDg2oU32O5PT5/TGIfcmRJh8bycnGs5YBKbliHkwXgxD0PYN4xNJS+Qjon05FDvmFKHIocsjPAb/9KENt6NB3AG9crh4Aa5sYQxrZPUuXDwkhJVuaASCEwYDxM1E59/z6jgXxfffZD3HbLmtgHK9DhQJEfNfSUoeXAL2wdHm718SU3NR9MO9f3AsDiIE7BV0+4gJNA+glwqCpybf7T71aI8UkS7hGzIMsUSZ8h4Bbli4fbQQC8T5LSz1U1Jn1IHsOQNwz32E4BA8gYrpqGsnzAqI/V+ySQENgCBdXhh7qppGppdcgbAWw4JCjTGjpZzUA4RaTPUKAGmqovTLkClZBfDlRWX1t/Obmcg0iky2pDOj/NdRL8lJhYEyqxofN0S0/3KzNAtgY5F0mCq/TFR61dPmkK/QOQBcAGwQTjD0NcA19VTQBUgIA4jKD8gnbMX79vZ13MtGxgpYcE8KZbGmegS8O8YEJLfVeyZYu/MmTCPcqMIYtQ76yCJ4rvQQjHQAQPpYTle5a+zaOZiBb7HFAoqnnYh1IP7ohz3sXY3EvmMaDzNBTcOygZfR+qwnuUqc3dJD9BKBN7tpXZj5TMFIP6mE+8XYdr6ieBvgSgFiQQOKsKgCTCZ+IIQPYVhdptuUzgFmAOwHqBiCF3kOeDdzqYitN3XaP0q1eXFi/i17H+Dnbdg79Bg1ZljSsJw5LAAAAAElFTkSuQmCC"/></div>
                        <div className="options-name">JavaScript</div>
                    </div>
                    <div 
                        className="options"
                        tabIndex="0"
                        onClick={() => sendCategory("accessibility")}
                    > 
                        <div className="options-logo logo-acc"><img src="data:image/png;base64,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"/></div>
                        <div className="options-name">Accessibility</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StartPage