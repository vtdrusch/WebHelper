@extends('layouts.master')

@section('title', 'Resources @ LITTLEHelpers')

@section('head')
@stop

@section('content')
<body class="body">
<!-- CONTENT ================================================== -->
<div id="main-content" class="container">
  <div class="row mt-contacts">
    <!-- horizontally center content -->
    <div class="centered">
      <h1 class="contact-header">Resources</h1>
      <hr>
    </div>
    <!-- RESOURCES ================================================== -->
    @if(isset($favorites))
    <div class="col-md-12">
      <div class="panel-group" id="group-list" role="tablist" aria-multiselectable="true">
        @foreach($groups as $g)
          <div class="panel panel-default no-padding">
            <div id="group{{$g->id}}" class="panel-heading" role="tab">
              <h3 class="panel-title"> 
                <a data-toggle="collapse" data-parent="#group-list" href="#list{{$g->id}}" aria-expanded="true" aria-controls="list{{$g->id}}">
                  {{{$g->title}}}
                </a>
              </h3>
            </div>
            <div id="list{{$g->id}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="group{{$g->id}}">
              <ul class="list-group">
                @foreach($g->resources as $r)
                  <li class="list-group-item"><dl>
                    <dt> 
                      <a href="{{$r->url}}"> {{{$r->title}}} </a>
                      <span class="pull-right text-muted"> <span class="count"> {{{$r->favorites}}} </span>
                        @if($favorites->contains($r->id))
                          <i id="{{$r->id}}" data-id="{{$r->id}}" class="favorite fa fa-heart"> </i>
                        @else
                          <i id="{{$r->id}}" data-id="{{$r->id}}" class="favorite fa fa-heart-o"> </i>
                        @endif
                      </span>
                    </dt>
                    <dd> <p> {{{$r->description}}} </p></dd>
                  </dl></li>
                @endforeach
              </ul>
              <div class="panel-footer">
                <a data-toggle="collapse" data-parent="#group-list" href="#list{{$g->id}}" aria-expanded="true" aria-controls="list{{$g->id}}">
                  Close
                </a>
              </div>
            </div>
          </div>
        @endforeach
      </div>
    </div>
    @else
    <div class="col-md-12">
      <div class="panel-group" id="group-list" role="tablist" aria-multiselectable="true">
        @foreach($groups as $g)
          <div class="panel panel-default no-padding">
            <div id="group{{$g->id}}" class="panel-heading" role="tab">
              <h3 class="panel-title"> 
                <a data-toggle="collapse" data-parent="#group-list" href="#list{{$g->id}}" aria-expanded="true" aria-controls="list{{$g->id}}">
                  {{{$g->title}}}
                </a>
              </h3>
            </div>
            <div id="list{{$g->id}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="group{{$g->id}}">
              <ul class="list-group">
                @foreach($g->resources as $r)
                  <li class="list-group-item"><dl>
                    <dt> 
                      <a href="{{$r->url}}"> {{{$r->title}}} </a>
                      <span class="pull-right text-muted"> {{{$r->favorites}}}
                          <i class="fa fa-heart"> </i>
                      </span>
                    </dt>
                    <dd> <p> {{{$r->description}}} </p></dd>
                  </dl></li>
                @endforeach
              </ul>
              <div class="panel-footer">
                <a data-toggle="collapse" data-parent="#group-list" href="#list{{$g->id}}" aria-expanded="true" aria-controls="list{{$g->id}}">
                  Close
                </a>
              </div>
            </div>
          </div>
        @endforeach
      </div>
    </div>
    @endif
  </div>
</div>
</body>
@stop

@section('scripts')
<script type="text/javascript">
  $('.favorite').click(function() {
    var url = "{{URL::to('user/favorite')}}";
    var id = $(this).attr('data-id');
    var element = "#"+id;

    $.ajax(
    {
        url: url,
        type: "POST",
        data: {id: id},
        dataType: "json",
        success:function(data, textStatus, jqXHR)
        {
          $(element).removeClass("fa-heart fa-heart-o").addClass(data['class']);
          $(element).prev().html(data['count']);
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
          alert();
        }
    });
  });

</script>
@stop
