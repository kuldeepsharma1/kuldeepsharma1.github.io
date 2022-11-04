(function() {
  $('.menu-toggle').on('click', function(e) {
    var target;
    e.preventDefault();
    target = $(this).toggleClass('open').data('toggle');
    return $(`#${target}`).toggleClass('open');
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxDQUFBLENBQUUsY0FBRixDQUFpQixDQUFDLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFFBQUEsQ0FBQyxDQUFELENBQUE7QUFDOUIsUUFBQTtJQUFFLENBQUMsQ0FBQyxjQUFGLENBQUE7SUFDQSxNQUFBLEdBQVMsQ0FBQSxDQUFFLElBQUYsQ0FBSSxDQUFDLFdBQUwsQ0FBaUIsTUFBakIsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixRQUE5QjtXQUNULENBQUEsQ0FBRSxDQUFBLENBQUEsQ0FBQSxDQUFJLE1BQUosQ0FBQSxDQUFGLENBQWUsQ0FBQyxXQUFoQixDQUE0QixNQUE1QjtFQUg0QixDQUE5QjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiJCgnLm1lbnUtdG9nZ2xlJykub24gJ2NsaWNrJywgKGUpIC0+XG4gIGUucHJldmVudERlZmF1bHQoKVxuICB0YXJnZXQgPSAkKEApLnRvZ2dsZUNsYXNzKCdvcGVuJykuZGF0YSgndG9nZ2xlJylcbiAgJChcIiMje3RhcmdldH1cIikudG9nZ2xlQ2xhc3MoJ29wZW4nKSJdfQ==
//# sourceURL=coffeescript