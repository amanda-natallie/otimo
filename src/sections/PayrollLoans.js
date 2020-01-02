import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { Grid, Hidden, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { Fade } from "react-reveal"

const styles = theme => ({
    listItem: {
        paddingLeft: 30
    }
})

const images = {
    antecipacao: require('../images/icons/sem-antecipacao.png'),
    perfis: require('../images/icons/perfis-clientes.png'),
    quitacao: require('../images/icons/quitacao-debito.png'),
}


const PayrollLoans = ({ classes }) => {
    return (
        <>
            <section className="payroll-section w-full relative">
                <Grid container direction="row" alignItems="center" justify="center">
                    <Grid item>
                        <h2 className="text-blue-base">CRÉDITO CONSIGNADO</h2>
                        <h4 className="text-blue-dark">O melhor benefício para o seu colaborador</h4>

                        <div className="list">
                            <List component="nav" aria-label="credito consignado">
                                <ListItem button>
                                    <ListItemIcon>
                                        <img src={images.antecipacao} alt="Não pedimos nenhum tipo de valor antecipado" />
                                    </ListItemIcon>
                                    <ListItemText primary="Não pedimos nenhum tipo de valor antecipado." className={classes.listItem} disableTypography />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <img src={images.perfis} alt="As taxas são definidas de acordo com o perfil de cada cliente." />
                                    </ListItemIcon>
                                    <ListItemText primary="As taxas são definidas de acordo com o perfil de cada cliente." className={classes.listItem} disableTypography />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <img src={images.quitacao} alt="A quitação do débito pode ser feita a qualquer momento." />
                                    </ListItemIcon>
                                    <ListItemText primary="A quitação do débito pode ser feita a qualquer momento." className={classes.listItem} disableTypography />
                                </ListItem>
                            </List>
                        </div>
                    </Grid>
                    <Hidden smDown>
                        <Grid item md={3} />
                    </Hidden>
                </Grid>
            </section>
        </>
    )
}
export default withStyles(styles, { withTheme: true })(PayrollLoans);