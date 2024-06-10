import { expect } from '@wdio/globals'


describe('Lojinha app', () => {
    it('Realizar login na lojinha app', async () => {
     
        // Arrange (Preparação) 
        const usuario = 'admin'
        const senha = 'admin'
        const inpUsuario = $('android=new UiSelector().text("Usuário")')
        const inpSenha = $('android=new UiSelector().text("Senha")')
        const btnEntrar = $('android=new UiSelector().text("ENTRAR")')
        // Act (Ação)
        await driver.pause(5000)

        await inpUsuario.waitForDisplayed()
        await inpSenha.waitForDisplayed()

        await inpUsuario.addValue(usuario)
        await inpSenha.addValue(senha)
        await btnEntrar.click()

        // Assert (Verificação)
        expect (await lbListaProdutos.getText()).toEqual("Lista de Produtos")

    })
})

