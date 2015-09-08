/**
 * Created by Liang Jianshuo .
 */
$(function(){
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        'sectionsColor': ['#00BFFF', '#00BFFF', '#00BFFF', '#00BFFF', '#00BFFF', '#00BFFF'],
        anchors: ['Profile', 'Project', 'Skill', 'Certificate','Education','More'],
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['Profile', 'Project', 'Skill', 'Certificate','Education','More']
    });
})