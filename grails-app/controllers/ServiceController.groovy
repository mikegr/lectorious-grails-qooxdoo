import grails.converters.*

class ServiceController {

  def test = {
    render ["String" ] 
  }
  
  def test2 = {
         def listResult = [[ total: 23, items: "Test"],[ total: 23, items: "Test"]]
         render listResult as JSON
  }

  def countRows = {
    println("countRows");
    def result = [Subscription.count()];
    println(result.getClass());
    render result as JSON
  }

  def getRows = {
    println("getRows");
    params.from;
    params.to;

    def subscription = Subscription.get(1);

    def list = [[id:subscription.id, name:subscription.course.name, university:subscription.course.university.name, professor:subscription.course.professor]]

    render list as JSON
    
  }
}