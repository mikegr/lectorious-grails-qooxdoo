class Subscription {

    Date startTime;
    Date endTime;

    static constraints = {
    }

    static belongsTo = [user:User, course:Course]

}
