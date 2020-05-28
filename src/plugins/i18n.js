import Vue from 'vue';

import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

const barRaceColor = {
    confirmed: "#33CCFF",
    active: "#ffaa00",
    death: "#bcbcbc",
    dRate: "#bcbcbc",
    cured: "#00ff79",
    cRate: "#00ff79"
}

const messages = {
    'en': {
        pageTitle: "COVID-19 Info",
        title: "Relatório ",
        dateFormat: "DD MMM",
        launchIndicator: ["Fique em casa, fique seguro.", ],
        subtitles: {
            today: "Hoje:",
            country: "Paises:",
            nearby: "Pesquise o local:",
            confirmAndDeath: "Casos acumulados:",
            newDeaths: "Novos casos:",
            rates: "Taxa de mortalidade e taxa de recuperação",
            regionList: "Lista por região:",
            source: "Source",
            map: "Casos confirmados em mapa",
            timeMachine: "Covid-19 temporal",
        },
        tmHint: "Historico de data até hoje.",
        tmSticky: "Historico de data",
        tmRevert: "Revert",
        totalConfirmed: "Confirmados",
        totalDeaths: "Obitos",
        totalTests: "Testados",
        totalCured: "Recuperados",
        negative: "Negativo",
        active: "Positivo",
        england: "England",
        scotland: "Scotland",
        wales: "Wales",
        nIreland: "N. Ireland",
        nav: {
            current: "Atual",
            animation: "Animação",
            map: "Regional"
        },
        newCases: "Novos casos",
        newDeaths: "Novos obitos",
        deathRate: "Indice de mortalidade",
        cureRate: "Taxa de cura",
        chartTimes: {
            oneWeek: "7 Dias",
            twoWeek: "14 Dias",
            oneMonth: "31 Dias",
            all: "Todas as datas.",
        },
        nearBy: {
            ukDefault: "Pesquise casos na região do NHS por código postal ou toque no ícone do lado esquerdo para localizar.",
            usDefault: "Pesquise casos e classificações por município ou toque no ícone do lado esquerdo para localizar.",
            postcodeErr: "Desculpe, o código postal do Reino Unido digitado é inválido.",
            ukResult: `Currently, there are<span>{1}</span> confirmed cases in<span>{0}</span>, with a change of <span>{2}</span> cases, it is ranked <span>{3}</span> in all NHS regions.`,
            usResult: `Currently, there are<span>{1}</span> active cases in<span>{0}</span>. Cumulatively, there are<span>{2}</span> confirmed cases, <span>{3}</span> deaths<span>({4}%)</span> and <span>{5}</span> recovered<span>({6}%)</span>. It is ranked <span>{7}</span> in all US counties.`,
            usStateResult: `No Estado de {0}, tem<span>{1}</span> pessoas testadas no total, a taxa média de teste é<span>{2}%</span>, classificado <span>{11}</span> mais alto em todos os estados. Daqueles<span>{3}</span> tested positive, <span>{4}</span> are hospitalized ({5}%),<span>{6}</span> deaths ({7}%), <span>{8}</span> recovered. Currently there are<span>{9}</span> active cases. It is ranked <span>{10}</span> in all states.`,
            notFound: `Desculpe, não podemos encontrar dados . <span>{0}</span>`,
            locating: "Localizando, aguarde um momento ...",
            notUk: "Desculpe, mas não podemos localizá-lo em uma região do Reino Unido.",
            notUs: "Desculpe, mas não podemos localizá-lo em um condado dos EUA.",
            rejected: "Desculpe, mas você negou a permissão do GPS.",
            unsupported: "Desculpe, geolocalização não é suportada neste navegador.",
            search: "Procure:",
            switchCountyState: "Alterar dados do estado/país",
            goToRegional: "Vá para a seção de dados regionais."
        },
        barRace: {
            global: "Global",
            local: "País",
            globalTitle: "Historico Global",
            localTitle: "Historico por região",
            unit: "Casos Confirmados"
        },
        table: {
            default: "Ordenar por:",
            byRegion: "Região",
            byCases: "Casos",
            byChanges: "Alterar",
            region: "Região",
            cases: "Confirmados",
            changes: "Alterar",
            showAll: "Mostre tudo:",
            showLess: "Mostre menos"
        },
        selector: {
        },
        compareNote: "Data is aligned by the date when confirmed cases reaches 50 in each region",
        compareSelect: "Select any countries below to add for comparision",
        dataSwitch: {
            number: "Casos confirmados",
            confirmed: "Casos confirmados",
            active: "Casos ativos",
            death: "Numero de obitos",
            dRate: "indice de mortalidade (%)",
            cured: "Casos recuperados",
            cRate: "Incide de recuperação (%)"
        },
        total: "Total",
        showAllCharts: "Mostrar todo o gráfico",
        showLess: "Ocultar",
        noData: "Não há dados disponíveis para esta visualização. Você pode tentar outros tipos de dados.",
        barRaceColor: barRaceColor,
        fab: {
            share: "Compartilhar",
            dashboard: "Painel",
            scroll: "Exibição de rolagem"
        }
    },
    'zh': {
        pageTitle: "COVID-19 Rastreamento de dados epidêmicos em tempo real ",
        title: "Dinâmica de dados em tempo real",
        dateFormat: "MM/DD",
        launchIndicator: [ "Por favor, proteja-se "],
        subtitles: {
            today: "Visão geral de hoje",
            country: "Visão geral do país",
            nearby: "Verifique o diagnóstico circundante",
            confirmAndDeath: "Diagnóstico e obito",
            newDeaths: "Novo diagnóstico e obito",
            rates: "Mortalidade e taxa de cura",
            historyAnimation: "Animação de alteração de dados históricos",
            regionList: "Lista de diagnóstico geográfico",
            source: "Fontes de dados",
            about: "em",
            map: "Mapa de diagnóstico de países e regiões",
            ratio: "Percentual de pessoas",
            timeMachine: "Máquina do tempo",
            countryCompare: "Análise de dados nacionais e regionais"
        },
        tmHint: "Deslize a barra de progresso para visualizar dados históricos",
        tmSticky: "Visualizando Dados Históricos",
        tmRevert: "Voltar para hoje",
        totalConfirmed: "累计确诊",
        totalDeaths: "累计死亡",
        totalTests: "累计测试",
        totalCured: "累计治愈",
        negative: "测试阴性",
        active: "现存确诊",
        england: "英格兰",
        scotland: "苏格兰",
        wales: "威尔士",
        nIreland: "北爱尔兰",
        nav: {
            current: "当前数据",
            animation: "历史动画",
            map: "地区概况"
        },
        newCases: "新增确诊",
        newDeaths: "新增死亡",
        deathRate: "死亡率",
        cureRate: "治愈率",
        chartTimes: {
            oneWeek: "一周内",
            twoWeek: "两周内",
            oneMonth: "一个月内",
            all: "全部数据",
        },
        nearBy: {
            usDefault: "搜索州或郡名即可查询最近的区域确诊数量，点击左侧按钮可以自动定位。",
            ukDefault: "输入您的英国邮编即可查询最近的区域确诊数量，点击左侧按钮可以自动定位。",
            postcodeErr: "抱歉，您输入的邮编有误",
            ukResult: `目前，<span>{0}</span>区共有<span>{1}</span>例确诊，相较上次变化<span>{2}</span>例，在NHS地区中排名第<span>{3}</span>。`,
            notFound: `抱歉，我们无法找到<span>{0}</span>的相关信息`,
            locating: "定位中，请稍候...",
            notUk: "很抱歉，我们无法定位您到英国的地区",
            notUs: "很抱歉，我们无法定位您到美国的地区",
            rejected: "很抱歉，我们无法定位，因为您已拒绝位置授权",
            unsupported: "很抱歉，您的浏览器不支持定位",
            search: "查询",
            switchCountyState: "切换州或郡数据",
            goToRegional: "前往地区数据版块"
        },
        barRace: {
            global: "全球",
            local: "本地",
            globalTitle: "全球确诊数据",
            localTitle: "国家确诊数据",
            unit: "确诊人数（例）"
        },
        table: {
            default: "默认排序",
            byRegion: "按地区",
            byCases: "数据",
            byChanges: "按变化",
            region: "地区",
            cases: "确诊人数",
            changes: "较上次",
            showAll: "显示全部",
            showLess: "收起"
        },
        selector: {
            uk: "🇬🇧英国实时数据",
            us: "🇺🇸美国实时数据",
            world: "🌎世界实时数据"
        },
        compareNote: "数据以国家确诊首次超过50例作为起点对齐",
        compareSelect: "从下列输入框可选择其他任何国家进行对比",
        dataSwitch: {
            number: "累计确诊",
            confirmed: "累计确诊",
            active: "现存确诊",
            death: "累计死亡",
            dRate: "死亡率 (%)",
            cured: "累计治愈",
            cRate: "治愈率 (%)"
        },
        total: "累计",
        showAllCharts: "显示全部图表",
        showLess: "收起",
        noData: "暂无数据，您可以查看其他数据类型或国家",
        barRaceColor: barRaceColor,
        fab: {
            share: "分享",
            dashboard: "瀑布布局",
            scroll: "滚动布局"
        }
    }
};

// eslint-disable-next-line no-unused-vars
export const i18n = new VueI18n({
    locale: navigator.language.split('-')[0], // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});