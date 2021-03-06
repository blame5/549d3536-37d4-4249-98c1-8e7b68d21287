var scope;
var rec;

webApp.controller('BookController', function ($scope, WebService, $location, recorderService) {
    scope = $scope;
    rec = recorderService;
    var ctrl = this;
    ctrl.volume = .5;
    var queryParams = $location.search();
    ctrl.bookId = queryParams.bookId;

    ctrl.init = function () {
        if (ctrl.bookId) {
            WebService.getAudioList(ctrl.bookId, function (data) {
                ctrl.audioList = data;
            });
        }
    }

    ctrl.playfile = function (file) {
        if (file) {
            if (ctrl.wavesurfer) {
                ctrl.wavesurfer.destroy();
            }
            var url = WebService.getAudioFileUrl(ctrl.bookId, file);
            ctrl.wavesurfer = WaveSurfer.create({
                container: '#waveform',
                waveColor: 'violet',
                progressColor: 'purple'
            });
            ctrl.wavesurfer.load(url);
        }
    }

    ctrl.play = function() {

        ctrl.wavesurfer.play();
    }

    ctrl.pause = function() {

        ctrl.wavesurfer.pause();
    }

    ctrl.stop = function() {
        ctrl.wavesurfer.stop();
    }


    $scope.book = {};
    $scope.book.chapters = ["<p>Lorem ipsum dolor sit amet, modus debet oblique usu ex. Falli legimus placerat per ex, tollit postulant adversarium vim cu. Et nonumy fabulas sea, mundi pericula ullamcorper qui et, aperiam invidunt qui id. Mea ne diceret partiendo liberavisse.    </p>    <p>    Sed fabulas dolorem accumsan te, cum et facete voluptua. Dolor dicam dolores sed ut. Petentium iudicabit ullamcorper an nec. Cu has graecis vivendum, eam amet ridens te. Dolorum eligendi definiebas nec ex, vix te esse placerat.    </p>    <p>    Saperet meliore cu pro, eu sit simul omittam necessitatibus, nec id congue oporteat. Ancillae forensibus te has, ex congue omittam neglegentur duo. Ceteros temporibus vim te. Ad quas dolore eos.    </p>    <p>    Ad mundi scripserit duo, posse clita vel cu, ad cibo cetero nam. Brute denique consequat sed ne. Vis regione accusam disputando te, eu ridens omittantur eos, at pro laoreet eligendi ocurreret. Et libris delectus accommodare per. Per delicata expetendis mnesarchum te, feugait accusamus intellegebat cu eum. Wisi velit ei has.    </p>    <p>    His ut ridens commodo. Cu vix animal nominati, mel utinam percipit facilisi ad, ad utamur tritani duo. Qui expetenda intellegat efficiantur an. Ius ne equidem dolores reformidans, mei eu magna mollis impedit.    </p>    <p>    Nisl nibh ad vis. Viris suscipit iracundia sed ut, cu sea alienum corrumpit scripserit, cu pro ferri diceret. Vis detracto explicari gubergren et, duis fugit commune sed eu, ex decore salutandi pertinacia sit. Quo ut debet mundi, mel ne iracundia splendide. Aeterno deterruisset eum id, duo an quas sonet.    </p>    <p>    Quo eu dicunt officiis instructior, no liber dolor pericula vim. Id adhuc omnes perpetua eam. Vix at laudem quaerendum, ex oporteat partiendo forensibus pri, an pro diam velit debet. Qui graece bonorum assueverit ei, sed ne brute theophrastus. Iisque oportere euripidis cu usu. Aliquid tacimates eum cu, case verterem has ei. Eu sit scaevola vituperatoribus, cu est similique conceptam referrentur.    </p>    <p>    Dolorem verterem lucilius ea vix, ei possit euismod sea. Delectus oportere definitionem ea vel. Autem fastidii quo eu, his in adhuc erant. Vix ex debet audiam reprimique, at evertitur rationibus est, dicunt conclusionemque ne per. Sit ut iudico expetenda, at per vide inimicus.    </p>    <p>    Mea at nobis omnes intellegam, vis ut zril dolorem. In quod solum euripidis sed, ignota fierent in vel. Vim ad inani verterem consectetuer, ea ius democritum ullamcorper intellegebat. Et utamur expetenda has, eum ea doming delectus tincidunt, te cum vivendo periculis. Possim iracundia ne mea, saepe nominati qui ad. Vis no accusata convenire intellegebat, erat graece sapientem ea duo.    </p>    <p>    Mundi vitae aeterno usu in. Eu per labores rationibus, per offendit patrioque assentior et. Id est expetenda eloquentiam, no unum molestie electram cum. Vim facer ancillae ad, congue assentior eam ad. Quo tota aliquip cu. Ad phaedrum intellegam scripserit mel. No sed veritus periculis, numquam platonem temporibus mea cu.    </p>    <p>    Quem enim molestiae eum eu. Utinam torquatos at quo, purto ferri solet est in, eu nec posse eligendi. Ex praesent pericula vis, id has quem magna postea. No vim illud atqui nostro, volumus iracundia mea et. Ea error officiis vituperata his.    </p>    <p>    At dicta diceret quo, commune apeirian ea sit. Pri audiam docendi id. At brute falli invenire per, qui ne oratio adversarium. His praesent temporibus consequuntur cu, at natum verear corrumpit duo. Sit facilis albucius volutpat ex, agam vocibus eum an. Nominavi omittantur ea ius, ancillae appetere iudicabit quo ex.    </p>    <p>    Duo ne ipsum dolor suscipiantur, clita signiferumque per ex, vix in ullum convenire consetetur. Vim movet libris rationibus ex, eu qui erant sonet. Sint regione scribentur ius et. Ea quidam integre urbanitas duo, at sed nihil nusquam reprimique.    </p>    <p>    Te pro legere detracto, iudico labore platonem his ad. Dicant adolescens id eum, in qui dico nemore vituperata, cu eos urbanitas neglegentur necessitatibus. Hinc argumentum duo in, pri te deserunt partiendo. Quando impetus ea vix, quas solet constituam ea cum.    </p>    <p>    Ad vim tamquam persecuti contentiones, vim facilisis incorrupte ut, choro docendi ea vis. Eu utinam tritani facilis usu. Deserunt evertitur ius et, vix ei vero partiendo vituperata. Zril primis putant vix ex. Mel minim option repudiandae ne, diam commodo graecis sea ei.    </p>    <p>    Te eam inimicus praesent, tantas admodum efficiantur ex nam. Ex nam nemore fuisset, labores ullamcorper te per, cetero labores eum cu. Soleat insolens usu an. Per consul lobortis scripserit ne, ex ius posse expetenda constituto.    </p>    <p>    Dolor recusabo oportere mel et, nisl facete his at. Est an alia bonorum, mea dolor platonem ut. Tritani constituam reprehendunt vel et, latine meliore explicari usu te. Ex sed erant voluptatum. Cu vix quem viderer inimicus, cu mea inermis intellegat.    </p>    <p>    Duo no falli voluptaria. Mundi recusabo torquatos ne duo, his adipisci sadipscing in. Perfecto perpetua eos eu. Usu aperiam vituperata an, semper graecis percipit ut sit, omnes eleifend eam id. An saperet dolorem conceptam usu, sed minimum sententiae no.    </p>    <p>    Vim ut autem feugiat sapientem, vix in ubique expetendis. Oporteat laboramus evertitur vel an, verear gloriatur pro no. Purto iriure cum ne. Honestatis dissentiunt efficiantur an mel. Pri liber epicuri scriptorem te, laoreet lobortis eu vim.    </p>    <p>    Quo iusto malorum id, eum nobis apeirian ex, vis fugit eirmod vocibus ne. Et odio aperiam delenit nec. Dicta intellegat ut quo, te nec illud dignissim accommodare, laudem cetero contentiones mea ut. Eos et verear adolescens, his quas equidem cu, labore laboramus ad mei. Tale quaeque oporteat vel cu.    </p>    "];
    console.log("Loaded");
    $scope.timeLimit = 60;

    $scope.editMode = false;

    $scope.edit = function () {
        $scope.editMode = true;
    }

    $scope.save = function () {
        $scope.editMode = false;
    }

    $scope.$watch('$ctrl.volume', function(newValue, oldValue){
        if (newValue == oldValue){
            return;
        }
        ctrl.wavesurfer.setVolume(ctrl.volume);
    })

}).config(function (recorderServiceProvider) {
    recorderServiceProvider
        .forceSwf(false)
        //.setSwfUrl('/lib/recorder.swf')
        .withMp3Conversion(true)
    ;
});