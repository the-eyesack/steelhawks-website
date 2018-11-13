$(function(){

    Vue.component('page-school', {
      template: get_template(),
      data: function(){
        return {
        }
      }
    });

    App.routes.push(
      { name: 'school', path: '/school', component: Vue.component('page-school') }
    );

    function get_template(){
        return `
        <div class="main-container">

          <section class="image-square right">

                  <div class="row">
                    <div class="col-md-5 image">
                      <div class="background-image-holder fadeIn"
                           style="background:url('ctn/img/thhs_building2.jpg')">

                          <img alt="image"
                               class="background-image"
                               src="ctn/img/thhs_building2.jpg"
                               style="display:none;"/>

                       </div>
                   </div>
                   <div class="col-md-6" style="padding:10px;margin:10px 50px">
                      <h3>Townsend Harris High School</h3>
                      <p class="mb20">
                          Townsend Harris is a young school with an honored past.
                          In 1848, the New York Free Academy, our first municipal institution of free higher education,
                          was established by the Board of Education due largely to the effort of Townsend Harris who was,
                          at the time, the president of the Board. The Free Academy later became the City College of New York.
                          The "introductory year" of the Free Academy grew into Townsend Harris High School which flourished
                          until 1942 when it was closed by Mayor LaGuardia because of budgetary constraints.
                          <br/>
                          <br/>
                          In 1984, Townsend Harris was reopened with a new location of Flushing, NY
                          and student body but the same spirit and desires as before.
                          Since that time Townsend Harris has provided a rigorous curriculum with
                          an emphasis on the humanities and classics, bolstered by mathematics, science,
                          and the integration of modern technology. In order to prepare the students for
                          ethical and intellectual challenges, the instructional program promotes respect
                          for people and ideas, critical and creative thinking, and precision of language.
                          The community encourages the students to strive for excellence, to make sensible
                          decisions, and to develop an enduring commitment to serving the community.
                      </p>
                  </div>
                </div>
        </section>
        </div>
    `;
  }
});
